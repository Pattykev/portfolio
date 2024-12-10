import React from "react";
import { Link } from "react-router-dom"; // Use curly braces to import Link

const Navbar = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/project">Project</Link></li>
                <li><Link to="/service">Service</Link></li>
            </ul>
        </div>
    );
}

export default Navbar; // Don't forget to export the Navbar component

