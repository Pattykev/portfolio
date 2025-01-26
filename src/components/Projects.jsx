import React from "react";
import "../css/Projects.css";

function Projects() {
    const projectStyle = {
        "padding":"2rem"
    };
    const imageStyle={
		"margin":"5rem 4rem"
	}
    return(
        <main style={imageStyle} className="container-project justify-center">
        <h1 className="p-8 text-center text-[28px]">My open source projects</h1>
        <div className="grid grid-rows-2 grid-flow-col text-justify gap-10"> 
            <div className="bg-gray-190 rounded-lg text-gray-600" style={projectStyle}> 
                <h2 className="text-center mb-2 text-[20px]">E-commerce web App</h2>
                <p>The e-commerce app provides a seamless shopping experience, allowing users to browse products, add items to their cart, and complete purchases securely. It includes features such as user authentication, product reviews, and order tracking. The app also supports various payment methods and offers personalized recommendations based on user preferences</p>
                <a href="https://angular-store-project-pi.vercel.app/" target="blank"><button className="p-2 w-1/5 bg-teal-800 text-white hover:bg-teal-600">view</button></a>
            </div>
            <div className="bg-gray-190 rounded-lg text-gray-600" style={projectStyle}>
                <h2 className="text-center mb-2 text-[20px]">Book library App</h2>
                <p>This web application allows users to browse, search, and manage a collection of books. Users can view book details, check availability, and add books to their personal reading lists. The app features user authentication, enabling personalized experiences, and facilitates book reviews and ratings to enhance community engagement.</p>
                <a href="https://book-library-fe-capstone.vercel.app/" target="blank"><button className="p-2 w-1/5 bg-teal-800 text-white hover:bg-teal-600">view</button></a>
            </div>
            <div className="bg-gray-190 rounded-lg text-gray-600" style={projectStyle}>
                <h2 className="text-center mb-2 text-[20px]">Website user interface</h2>
                <p>This project focuses on designing an intuitive and responsive user interface for a website. It emphasizes user experience (UX) principles, ensuring easy navigation and accessibility across devices. The UI incorporates modern design elements, such as interactive components and visually appealing layouts, to engage users and improve overall site usability.</p>
                <a href="https://tech-con-html-ten.vercel.app/" target="blank"><button className="p-2 w-1/5 bg-teal-800 text-white hover:bg-teal-600">view</button></a>
            </div>
            <div className="bg-gray-190 rounded-lg text-gray-600" style={projectStyle}>
                <h2 className="text-center mb-2 text-[20px]">Github search App</h2>
                <p>This application enables users to search for repositories, issues, and users on GitHub. It offers advanced filtering options and displays relevant results in an organized manner. Users can view repository details, explore contributors, and access project documentation directly from the app, enhancing their GitHub experience.</p>
                <a href="https://alx-fe-reactjs-cyan.vercel.app/" target="blank"><button className="p-2 w-1/5 bg-teal-800 text-white hover:bg-teal-600">view</button></a>
            </div>
        </div>
        </main>
    );
}
export default Projects;