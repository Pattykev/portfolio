import React, {useState} from "react";
import { Link } from "react-router-dom"; // Use curly braces to import Link


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return (
    <nav className="fixed top-0 left-0 w-full p-4 ">
        <div className="container mx-auto py-4  bg-transparent border-2 border-indigo-600 flex justify-center shadow w-2/5 rounded-full">
        <button 
          className="md:hidden text-white focus:outline-none justify-left" 
          onClick={toggleMenu}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`} >
            <ul className="flex space-x-6 ">
                <li ><Link className="text-black   hover:text-white" to="/">Home</Link></li>
                <li ><Link className="text-black   hover:text-white" to="/about">About</Link></li>
                <li ><Link className="text-black   hover:text-white" to="/blog">Blog</Link></li>
                <li ><Link className="text-black   hover:text-white" to="/contact">Contact</Link></li>
                <li ><Link className="text-black   hover:text-white" to="/project">Project</Link></li>
                <li><Link className="text-black   hover:text-white" to="/service">Service</Link></li>
            </ul>
            </div> 
        </div>
    </nav>
    );
}

export default Navbar; // Don't forget to export the Navbar component

