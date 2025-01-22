import React from "react";
import { FaEnvelope, FaLinkedin, FaPhabricator, FaPhoenixFramework, FaPhone, FaTwitter } from "react-icons/fa";

function Contact() {
    return(
        <main>
            <div> 
                <h1 className="p-8 text-center text-[24px]">Follow me on</h1>
                <div className="flex justify-center space-x-10" >  
                    <div className="flex flex-col items-center">
                        <a href="https://www.linkedin.com/in/patriciatchingue/" target="blank" title="Click me"><FaLinkedin /></a>
                        <p className="text-sm" >Linkedin</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <a href="https://x.com/KevineTchingue" target="blank" title="Click me"> <FaTwitter/></a>
                        <p className="text-sm">Twitter</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <a href="mailto:patricia.tchingue@gmail.com" target="blank" title="Click me"> <FaEnvelope/>  </a>
                        <p className="text-sm">Gmail</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <a href="https://wa.me/+237697887157" target="blank" title="Click me"> <FaPhone/> </a>
                        <p className="text-sm">Phone</p>
                    </div>
                </div>

            </div>
            <h1 className="p-6 mt-12 mb-10 text-center text-[24px]">Send me message in private here:</h1>
            <div className="flex items-center justify-center min-h-screen bg-gray-100 rounded-lg">
                <form className="bg-white p-8 rounded-lg shadow-md w-100">
                    <label className="block text-sm font-medium text-gray-700">Your email adress</label>
                    <input className="mb-4 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" type="text" title="Write your email adress here!"/>
                    <label className="block text-sm font-medium text-gray-700">Subject</label>
                    <input className="mb-4 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" type="text" title="Write your subject here!"/>
                    <label className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea className="mb-4 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" cols={"70"} rows={"10"} title="Write your message here!"/>
                    <button type="submit" className="w-full py-2 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">Submit</button>
                </form>
            </div>
        </main>
        
    );
}
export default Contact;