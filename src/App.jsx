import { useState } from 'react'
import './App.scss'
import Filters from "./components/Filters";
import MainBody from "./components/MainBody";


function App() {
 

  return (
    <div className='App'>
        <Filters />
        <MainBody />
    </div>
  )
}

export default App
