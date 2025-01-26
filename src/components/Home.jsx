import React from "react";
import img from "/src/assets/profile-top.png";
import { FaGithub, FaHandshake, FaLinkedin, FaTwitter,FaFolder} from "react-icons/fa";
import "../css/Home.css";


function Home() {
  const horizontalMargin = {
    "marginTop":"7rem",
    "marginLeft":"5rem"
  };

  return(
    <> 
    <main>
      <div className="container flex mx-auto justify-center"> 
        <img className="rounded-full border-1 border-gray-400 w-35"  src={img} alt="profile image" />
        <div style={horizontalMargin} className="mb-15" >
          <h1 className="text-[28px] mb-4">Hi! I'm Patricia Kevine aka PattyKev <span className="inline-flex"><FaHandshake color="teal" size={25} /></span> </h1>
          <br/>
          <p className="subTitle text-[20px]"> <span>💼</span> I'm a Freelance FullStack Developer and Nappy Ambassador</p>
          <br/>
          <p> <span >🌎</span>  I live in Douala, Cameroon</p>
          <br/>
          <p className="mb-12"><span>📧</span> patricia.tchingue@gmail.com </p>
          <div className="flex gap-x-10">
            <a href="https://github.com/Pattykev" target="blank" title="GitHub" className="hover:animate-bounce"><FaGithub size={25}  className="text-sm"/></a>
            <a href="https://www.linkedin.com/in/patriciatchingue/" target="blank" title="Linkedin" className="hover:animate-bounce"><FaLinkedin size={25} /></a>
            <a href="https://x.com/KevineTchingue" target="blank" title="X" className="hover:animate-bounce">  <FaTwitter size={25}  /></a>
          </div>  
        </div>
      </div>
      </main>
    </>
  );
}
export default Home;