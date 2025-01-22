import React from "react";
import img from "/home/patricia/Desktop/TMPK-Image/portfolio/src/assets/profile-top.png";
import { FaGithub, FaHandshake, FaLinkedin, FaTwitter,FaFolder} from "react-icons/fa";
import {  IconContext} from "react-icons";


function Home() {
  const horizontalMargin = {
    "marginTop":"7rem",
    "marginLeft":"5rem"
  };

  return(
    <> 
    <main>
      <div className=" flex mx-auto justify-center"> 
        <img className="bg-indigo rounded-full border-2 border-gray-200 w-35"  src={img} alt="profile image" />
        <div style={horizontalMargin} className="mb-15" >
          <h1 className="text-[24px]">Hi! I'm Patricia Kevine aka PattyKev <span><FaHandshake/></span> </h1>
          <br/>
          <p className="text-[20px]"> <span>💼</span> I'm a Freelance FullStack Developer and Nappy Ambassador</p>
          <br/>
          <p> <span >🌎</span>  I live in Douala, Cameroon</p>
          <br/>
          <p><span>📧</span> patricia.tchingue@gmail.com </p>
          <div className="flex gap-x-12 mt-5">
            <a href="https://github.com/Pattykev" target="blank" ><FaGithub className="text-sm"/></a>
            <a href="https://www.linkedin.com/in/patriciatchingue/" target="blank"><FaLinkedin /></a>
            <a href="https://x.com/KevineTchingue" target="blank">  <FaTwitter /></a>
          </div>  
        </div>
      </div>
      </main>
    </>
  );
}
export default Home;