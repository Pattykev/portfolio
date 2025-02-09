import React from "react";
import { FaEnvelope, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";
import "../css/Contact.css";

function Contact() {
    const imageStyle={
		"margin":"5rem 4rem"
	}
    return(
        <main style={imageStyle} className="container-contact justify-center" >
            <div> 
                <h1 className="p-8 text-center text-[28px]">Follow me on</h1>
                <div className="icon flex justify-center space-x-8" >  
                    <div className="flex flex-col items-center">
                        <a href="https://www.linkedin.com/in/patriciatchingue/" target="blank" title="Click me" className="hover:animate-bounce"><FaLinkedin size={25}  color="teal"/></a>
                        <p className="text-sm" >Linkedin</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <a href="https://x.com/KevineTchingue" target="blank" title="Click me" className="hover:animate-bounce"> <FaTwitter size={25} color="teal" /></a>
                        <p className="text-sm">Twitter</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <a href="mailto:patricia.tchingue@gmail.com" target="blank" title="Click me" className="hover:animate-bounce"> <FaEnvelope size={25} color="teal" />  </a>
                        <p className="text-sm">Gmail</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <a href="https://wa.me/+237697887157" target="blank" title="Click me" className="hover:animate-bounce"> <FaPhone size={25} color="teal" /> </a>
                        <p className="text-sm">Phone</p>
                    </div>
                </div>

            </div>
            <h2 className="p-6 mt-12 mb-10 text-center text-[28px]">Send me a private message </h2>
            <div className="divForm  bg-gray-100 rounded-lg">
                <form id="contact-form" action="mailto:patricia.tchingue@gmail.com" className="bg-white p-8 rounded-lg shadow-md w-100" method="post">
                    <label className="block text-sm font-medium text-gray-700">Your email adress</label>
                    <input name="email" className="mb-4 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" type="text" title="Write your email adress here!"/>
                    <label className="block text-sm font-medium text-gray-700">Subject</label>
                    <input name="subject" className="mb-4 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" type="text" title="Write your subject here!"/>
                    <label className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea name="message" className="mb-4 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" cols={"70"} rows={"10"} title="Write your message here!"/>
                    <button type="submit" className="w-full py-2 mt-4 bg-teal-600 text-white rounded-md hover:bg-teal-400 transition duration-200">Submit</button>
                </form>
                
            </div>

            <script src="formJS.js"></script>
        </main>
        
    );
}
export default Contact;