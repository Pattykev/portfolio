import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Error from "./components/Error";
import Navbar from "./components/Navbar";



function App() {
  

  return (
    
    <>
      
      <Router>
        <Navbar />
        
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/project' element={<Projects/>} />
            <Route path='/service' element={<Services/>} />
            <Route path='*' element={<Error/>} />
          </Routes>
        
      </Router>
    
    </>
  )
}

export default App
