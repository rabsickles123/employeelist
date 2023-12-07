import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes} from "react-router-dom";
import Homepage from './Homepage'
import Employeepage from './Employeepage';
import {Route} from "react-router-dom";

function App() {

  return (
    <>

   <Homepage/>
   <Employeepage/>
   {/* <Routes>
    <Route path=  element = {<Employeepage/>}/>
   </Routes> */}

    </>
  )
}

export default App
