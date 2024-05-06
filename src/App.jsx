import { useEffect, useState } from "react";
import "./App.scss";
import Filters from "./components/Filters";
import MainBody from "./components/MainBody";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
let offset = -12;

function App() {
  const [jobDesList, setJobDesList] = useState([]); // Initialize job description state

  // function for fetching data
  const fetchData = async () => {
    try {
      if (offset >= 0) {
        const body = JSON.stringify({
          limit: 12,
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
        console.log(jdList);
        setJobDesList((prevList) => [...prevList, ...jdList]);
      
      }
      offset = offset + 12;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
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

  return (
    <div className="App">
      <Filters />
      <MainBody jobDesList={jobDesList} />
    </div>
  );
}

export default App;
