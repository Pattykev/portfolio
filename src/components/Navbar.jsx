import React, {useState} from "react";
import { Link } from "react-router-dom"; // Use curly braces to import Link


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return (
      <nav className="flex -mt-1 top-0 left-0 w-full p-4 ">
        <div className=" container justify-center mx-auto py-4 border-2 border-teal-400 flex shadow w-2/5 rounded-full">
          

        <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`} >
            <ul className="flex space-x-8">
                <li ><Link className="text-black link-list hover:text-teal-400 active:text-teal-300" to="/">Home</Link></li>
                <li ><Link className="text-black link-list hover:text-teal-400" to="/about">About</Link></li>
                <li ><Link className="text-black link-list hover:text-teal-400" to="/project">Project</Link></li>
                {/* <li ><Link className="text-black link-list hover:text-indigo-600" to="/Articles">Articles</Link></li> */}
                <li ><Link className="text-black link-list hover:text-teal-400" to="/contact">Contact</Link></li>
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

