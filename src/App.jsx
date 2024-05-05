import { useEffect, useState } from 'react'
import './App.scss'
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
        setJobDesList(jdList);


        
      }
      offset = offset + 12;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
  
    fetchData();
  }, []);

 

  return (
    <div className='App'>
        <Filters />
        <MainBody jobDesList={jobDesList}/>
    </div>
  )
}

export default App
