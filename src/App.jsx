import { useEffect, useState } from "react";
import "./App.scss";
import Filters from "./components/Filters";
import MainBody from "./components/MainBody";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
let offset = -16;

function App() {
  const [baseList, setBaseList] = useState([]); // Initialize job description state
  const [jobDesList, setJobDesList] = useState([]); // Initialize job description state

  const [roleState, setRoleState] = useState([]);
  const [locationState, setLocationState] = useState([]);
  const [experienceState, setExperienceState] = useState([]);
  const [remoteState, setRemoteState] = useState([]);
  const [techStackState, setTechStackState] = useState([]);
  const [minBasePayState, setMinBasePayState] = useState([]);
  const [nameState, setNameState] = useState("");

  const filterState = {
    roleState,
    setRoleState,
    locationState,
    setLocationState,
    experienceState,
    setExperienceState,
    remoteState,
    setRemoteState,
    techStackState,
    setTechStackState,
    minBasePayState,
    setMinBasePayState,
    nameState,
    setNameState,
  };

  // function for fetching data
  const fetchData = async () => {
    try {
      if (offset >= 0) {
        const body = JSON.stringify({
          limit: 16,
          offset: offset,
        });

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body,
        };

        const response = await fetch(
          "https://api.weekday.technology/adhoc/getSampleJdJSON",
          requestOptions
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        const { jdList, totalCount } = result;
        // console.log(jdList);

        const filterState = {
          role: JSON.parse(localStorage.getItem("Role")) ?? [],
          location: JSON.parse(localStorage.getItem("Location")) ?? [],
          experience: JSON.parse(localStorage.getItem("Experience")) ?? [],
          remote: JSON.parse(localStorage.getItem("Remote")) ?? [],
          techStack: JSON.parse(localStorage.getItem("Tech Stack")) ?? [],
          minBasePay: JSON.parse(localStorage.getItem("Min Base Pay")) ?? [],
          name: localStorage.getItem("Name") ?? "",
        };

        setBaseList((prevList) => [...prevList, ...jdList]);
        const newList = applyFilters(jdList, filterState);
        setJobDesList((prevList) => [...prevList, ...newList]);
      }
      offset = offset + 16;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setRoleState(JSON.parse(localStorage.getItem("Role")) ?? []);
    setLocationState(JSON.parse(localStorage.getItem("Location")) ?? []);
    setExperienceState(JSON.parse(localStorage.getItem("Experience")) ?? []);
    setRemoteState(JSON.parse(localStorage.getItem("Remote")) ?? []);
    setTechStackState(JSON.parse(localStorage.getItem("Tech Stack")) ?? []);
    setMinBasePayState(JSON.parse(localStorage.getItem("Min Base Pay")) ?? []);
    setNameState(localStorage.getItem("Name") ?? "");
    fetchData();
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 0.5
    ) {
      fetchData(); // Fetch new data when scrolled to bottom
    }
  };

  // Add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run effect only once on mount

  const applyFilters = (List, filters) => {
    return List.filter((job) => {
      // Check if role matches
      if (filters.role.length > 0) {
        let i;
        for (i = 0; i < filters.role.length; i++) {
          if (
            filters.role[i].value
              .toLowerCase()
              .includes(job.jobRole.toLowerCase())
          )
            break;
        }
        if (i === filters.role.length) return false;
      }

      // Check if location matches
      if (filters.location.length > 0) {
        let j;
        for (j = 0; j < filters.location.length; j++) {
          if (
            filters.location[j].value
              .toLowerCase()
              .includes(job.location.toLowerCase())
          )
            break;
        }
        if (j === filters.location.length) return false;
      }

      // Check if experience matches
      if (filters.experience.value && job.minExp < filters.experience.value) {
        return false;
      }

      // Check if remote matches
      if (filters.remote.length > 0) {
        let i;
        for (i = 0; i < filters.remote.length; i++) {
          if (
            filters.remote[i].value.toLowerCase() === "remote" &&
            job.location.toLowerCase() === "remote"
          )
            break;
          if (
            filters.remote[i].value.toLowerCase() !== "remote" &&
            job.location.toLowerCase() !== "remote"
          )
            break;
        }
        if (i === filters.remote.length) return false;
      }

      // // Check if tech stack matches
      // if (filters.techStack.length > 0 && !job.techStack.some(stack => filters.techStack.includes(stack))) {
      //   return false;
      // }

      // Check if min base pay matches
      if (
        filters.minBasePay.value &&
        job.minJdSalary < filters.minBasePay.value
      ) {
        return false;
      }

      // Check if name contains the filter
      if (!job.companyName.toLowerCase().includes(filters.name.toLowerCase())) {
        return false;
      }

      return true;
    });
  };

  const applyFiltersToJobs = (filters) => {
    const filteredJobs = applyFilters(baseList, filters);
    setJobDesList(filteredJobs);
  };

  return (
    <div className="App">
      <Filters
        filterState={filterState}
        applyFiltersToJobs={applyFiltersToJobs}
      />
      <MainBody jobDesList={jobDesList} />
    </div>
  );
}

export default App;
