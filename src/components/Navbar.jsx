import React from "react";
import { Link } from "react-router-dom"; // Use curly braces to import Link

const Navbar = () => {
    return (
    <nav className="fixed top-0 left-0 w-full  bg-none .h">
        <div className="container mx-auto py-4 flex justify-center">
            <ul className="flex space-x-8">
                <li className="text-black hover:text-gray-300"><Link to="/">Home</Link></li>
                <li className="text-black hover:text-gray-300"><Link to="/about">About</Link></li>
                <li className="text-black hover:text-gray-300"><Link to="/blog">Blog</Link></li>
                <li className="text-black hover:text-gray-300"><Link to="/contact">Contact</Link></li>
                <li className="text-black hover:text-gray-300"><Link to="/project">Project</Link></li>
                <li className="text-black hover:text-gray-300"><Link to="/service">Service</Link></li>
            </ul>
        </div>
    </nav>
    );
}

export default Navbar; // Don't forget to export the Navbar component

