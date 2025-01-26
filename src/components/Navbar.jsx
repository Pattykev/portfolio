import React, {useState} from "react";
import { Link, NavLink } from "react-router-dom"; // Use curly braces to import Link
import "../css/NavBar.css";

 const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = ()=> setToggleMenu(!toggleMenu);


const Navbar = () => {
 
    return (
      <nav className="flex -mt-1 top-0 left-0 w-full p-4 ">
        <div className=" container justify-center mx-auto py-4 border-2 border-teal-400 flex shadow w-2/5 rounded-full">
       

       <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
            <ul className="flex space-x-8">
                <li className="nav-item" ><NavLink  className="text-black link-list hover:text-teal-400 " style={({ isActive }) =>({color: isActive ? 'teal' : 'black'})}  to="/">Home</NavLink></li>
                <li className="nav-item" ><NavLink className="text-black link-list hover:text-teal-400" style={({ isActive }) =>({color: isActive ? 'teal' : 'black'})} to="/about">About</NavLink></li>
                <li className="nav-item"><NavLink className="text-black link-list hover:text-teal-400" style={({ isActive }) =>({color: isActive ? 'teal' : 'black'})} to="/project">Project</NavLink></li>
                {/* <li ><Link className="text-black link-list hover:text-indigo-600" to="/Articles">Articles</Link></li> */}
                <li className="nav-item" ><NavLink className="text-black link-list hover:text-teal-400" style={({ isActive }) =>({color: isActive ? 'teal' : 'black'})} to="/contact">Contact</NavLink></li>
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

export default Navbar; // Don't forget to export the Navbar component

