import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaHandshake, FaLinkedin, FaTwitter,FaFolder} from "react-icons/fa";
import  "../css/Footer.css";

function Footer(params) {
    const footerStyle ={
       "padding": "2rem 2rem"
    };
    return(
        <footer >
            <div className="container-footer bg-teal-200 w-full text-black bottom-0 mt-20 text-center" style={footerStyle} >
            <div className="col grid grid-rows-2 grid-flow-col text-justify gap-5  ml-20 mr-20 mb-10">
                <span className="title text-[18px] font-bold">Services</span>
                <span>
                     <NavLink className="text-black link-list hover:text-gray-600 underline" to="/about">About</NavLink>
               </span>
                <span className="title text-[18px] font-bold">Realisations</span>
                <span>
                    <NavLink className="text-black link-list hover:text-gray-600 underline" to="/project">Project</NavLink>
                </span>
                <span className="title text-[18px] font-bold">See more on</span>
                <span className="logo flex gap-x-10">
                    <a href="https://github.com/Pattykev" target="blank" title="GitHub" className="hover:animate-bounce"><FaGithub size={20}  className="text-sm"/></a>
                    <a href="https://www.linkedin.com/in/patriciatchingue/" target="blank" title="Linkedin" className="hover:animate-bounce"><FaLinkedin size={20} /></a>
                    <a href="https://x.com/KevineTchingue" target="blank" title="X" className="hover:animate-bounce">  <FaTwitter size={20}  /></a>
                </span>
            </div>
            <div className="text-center">
                <span className=" text-[13px] text-gray-800" >&copy; 2025 Patricia TCHINGUE. All right reserved.</span>
            </div>
            </div>
            
        </footer>

    );
    
}
export default Footer;