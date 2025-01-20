import React, {useState} from "react";
import { Link } from "react-router-dom"; // Use curly braces to import Link


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return (
      <nav className="  flex fixed top-0 left-0 w-full p-4 ">
        <div className=" container justify-center mx-auto py-4 border-2 border-indigo-600 flex  shadow w-2/5 rounded-full">
          

        <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`} >
            <ul className="flex space-x-8" >
                <li ><Link className="text-black   hover:text-indigo-600" to="/">Home</Link></li>
                <li ><Link className="text-black   hover:text-indigo-600" to="/about">About</Link></li>
                <li ><Link className="text-black   hover:text-indigo-600" to="/project">Project</Link></li>
                <li ><Link className="text-black   hover:text-indigo-600" to="/blog">Blog</Link></li>
                <li ><Link className="text-black   hover:text-indigo-600" to="/contact">Contact</Link></li>
            </ul>
            </div> 

           
        </div>
        <div className=" border-indigo-600 mr-20">
            <span aria-label="Full Moon" role="img">🌕</span>
              .
              .
               <span  aria-label="New Moon" role="img">🌑</span>
            </div>
    </nav>
    );
}

export default Navbar; // Don't forget to export the Navbar component

