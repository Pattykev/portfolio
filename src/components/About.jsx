import React from "react";
import imageSource from "/src/assets/profile-top.png";
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact, FaStar, FaJava, FaAngular, FaFire, FaLaptop, FaHandHolding, FaNetworkWired, FaPhone, FaGlasses} from "react-icons/fa";
import "../css/About.css";

function About() {
	const imageStyle={
		"margin":"5rem 4rem"
	}
	const handleDownload = () => {
		 // Create a link element
		 const link = document.createElement('a');
		 // Set the href to your server route
		 link.href = '/download'; // Update this to your server route
		 // Set the download attribute
		 link.setAttribute('download', 'Patricia-TCHINGUE.pdf');
		 // Append the link to the body
		 document.body.appendChild(link);
		 // Trigger the download by simulating a click
		 link.click();
		 // Clean up and remove the link
		 document.body.removeChild(link);
	  };
	return(
		< > 
		<main style={imageStyle} className="justify-center">
      	<div className="container-about grid grid-rows-1 grid-flow-col gap-4 justify-center"  > 
				<img src={imageSource} alt="Patricia's image" className=" rounded-full" />
            <div className="w-190 mt-25 text-justify">
					<h1 className="p-8 text-center text-[28px]">Patricia Kevine TCHINGUE MAKAMTE, FullStack Developer, Nappy Ambassador</h1>
            		<p className="text-gray-600 ml-10">
						🌟 At the crossroads between technology and creativity, I am a passionate young woman who embodies the spirit of innovation. An application developer by trade, I transform lines of code into elegant solutions that simplify everyday life.
						<br/>
						💄 Ambassador of a movement that values ​​female entrepreneurship, I design my own line of cosmetics, combining beauty and ethics. My career is a reflection of my versatility: always curious, I enthusiastically dive into each project, seeking to learn and improve.
						<br/>
						🚀 A hard worker, I firmly believe that passion and commitment are the keys to success. My goal? To inspire others to embrace their potential and never stop exploring. Whether in the heart of coding or in the art of cosmetics, I am determined to leave my mark.
					</p>
    				<button onClick={handleDownload} className="p-2 w-2/5 bg-teal-800 text-white hover:bg-teal-600 mt-8" >Download Resume</button>
					<div >
    					<h1 className="p-8 text-center text-[28px]">Programming languages and frameworks</h1>
    					<div className="language text-center bg-gray-200 grid grid-rows-2 grid-flow-col gap-2 text-gray-800 rounded-lg p-6"> 
        					<span><FaJs className="inline-flex mr-4" color="teal" size={18}/>JavaScript</span>
        					<span><FaStar className="inline-flex mr-4" color="teal" size={18} />TypeScript</span>
        					<span><FaJava className="inline-flex mr-4" color="teal" size={18}/>Java</span>
        					<span><FaCss3 className="inline-flex mr-4" color="teal"  size={18}/>CSS3</span>
        					<span><FaHtml5 className="inline-flex mr-4" color="teal" size={18} />HTML</span>
        					<span><FaReact className="inline-flex mr-4" color="teal" size={18} />React JS</span>
        					<span><FaAngular className="inline-flex mr-4" color="teal" size={18} />Angular</span>
        					<span><FaNodeJs className="inline-flex mr-4" color="teal" size={18} />Node JS</span>
        					<span><FaStar className="inline-flex mr-4" color="teal" size={18} />SQL</span>
        					<span><FaStar className="inline-flex mr-4" color="teal" size={18}/>No SQL</span>
    					</div>
					</div>

					<div >
    					<h1 className="p-8 text-center text-[28px]">Services</h1>
    					<div className="service bg-gray-200 grid grid-rows-4 grid-flow-col gap-10 text-gray-800 rounded-lg p-8">
        					<span> <FaFire className="inline-flex mr-4" color="orange" size={18}/>Website development (family biography, business, portfolio)</span>
        					<span> <FaLaptop className="inline-flex mr-4" color="orange" size={18}/> Complete web application development to automate the management of your box</span>
        					<span> <FaHandHolding className="inline-flex mr-4" color="orange" size={18}/> Collaboration on projects</span>
        					<span> <FaPhone className="inline-flex mr-4" color="orange" size={18}/> User Interface Design</span>
        					<span> <FaNetworkWired className="inline-flex mr-4" color="orange" size={18}/> Design and creation of your secure APIs</span>
        					<span> <FaStar className="inline-flex mr-4" color="orange" size={18}/> Hair care advice for Afro hair</span>
        					<span> <FaGlasses className="inline-flex mr-4" color="orange" size={18}/> Brand Ambassador of hair cosmetic brand for Afro hair</span>
    					</div>
					</div>

        		</div>
			</div>
			</main>
      </>
   );
}
export default About;