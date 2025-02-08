import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./tailwind.css";


function App() {
  return (
    <> 
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            {/* <Route path='/articles' element={<Articles/>} /> */}
            <Route path='/contact' element={<Contact/>} />
            <Route path='/project' element={<Projects/>} />
            <Route path='*' element={<Error/>} />
          </Routes>
          <Footer />
      </Router>
      
    </>
      
  )
}

export default App
