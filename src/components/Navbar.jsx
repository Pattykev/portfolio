import React, {useState} from "react";
import { Link, NavLink } from "react-router-dom"; // Use curly braces to import Link
import "../css/NavBar.css";


import {HiOutlineMenuAlt3} from "react-icons/hi";
import  "../../src/css/NavBar.css";





function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = ()=> setToggleMenu(!toggleMenu);


  return(

    <nav className='navbar flex -mt-1 top-0 left-0 w-full p-4 ' id = "navbar">
      <div className='navbar-content justify-center mx-auto py-4 border-2 border-teal-400 flex shadow w-2/5 rounded-full'>
        <div className='brand-and-toggler flex flex-sb'>
         

          <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size = {35} style = {{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
       </div>
  
        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav flex space-x-14">
            <li className='nav-item'>
              <NavLink  className="nav-link text-[22px] link-list hover:text-teal-400 " id="first" style={({ isActive }) =>({color: isActive ? 'teal' : ""})}  to="/">Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className="nav-link text-[22px]  text-black link-list hover:text-teal-400" style={({ isActive }) =>({color: isActive ? 'teal' : ""})} to="/about">About</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className="nav-link text-[22px] text-black link-list hover:text-teal-400" style={({ isActive }) =>({color: isActive ? 'teal' : ""})} to="/project">Project</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className="nav-link text-[22px] text-black link-list hover:text-teal-400" style={({ isActive }) =>({color: isActive ? 'teal' : ""})} to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className=" border-indigo-600 mr-10">
            <button className="border-teal-400" id="light" data-theme-toggler>🌕</button>
             
              <button className="border-teal-400 hidden" id="dark" data-theme-toggler>🌑</button>
        </div>
    </nav>
    );
 
}
export default NavBar; 