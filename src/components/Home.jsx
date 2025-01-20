import React from "react";
import img from "/home/patricia/Desktop/TMPK-Image/portfolio/src/assets/profile-top.png";
import { FaGithub, FaLinkedin, FaTwitter,} from "react-icons/fa";


function Home() {
    const horizontalMargin = {
      "marginTop":"7rem",
      "marginLeft":"5rem"
    }
    return(
  <> 
   <div className=" flex mx-auto justify-center"> 
  
   <img className="rounded-full border-2 border-gray-200"  src={img} alt="profile image" />
   
    
    <div style={horizontalMargin} className="mb-15" >
      <h1 className="text-[24px]">Hi! I'm Patricia Kevine aka PattyKev</h1>
      <br/>
      <p className="text-[20px]"> <span>💼</span> I'm a Freelance FullStack Developer</p>
      <br/>
      <p> <span >🌎</span>  I live in Douala, Cameroon</p>
      <br/>
      <p><span>📧</span> patricia.tchingue@gmail.com </p>

    
      
    </div>
</div>


<div className="flex my-30 mx-45 space-x-8">
<a href="https://github.com/Pattykev"><FaGithub /></a>
<a href="https://www.linkedin.com/in/patriciatchingue/"><FaLinkedin /></a>
<a href="https://x.com/KevineTchingue">  <FaTwitter /></a>
</div>

</>
      
    );
}
export default Home;