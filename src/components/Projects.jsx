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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui debitis, vel, fugiat commodi repudiandae corporis repellat soluta nemo unde voluptatibus ipsum voluptate sint vitae a eaque sapiente ullam quia assumenda.</p>
                <a href="https://angular-store-project-pi.vercel.app/" target="blank"><button className="p-2 w-1/5 bg-teal-800 text-white hover:bg-teal-600">view</button></a>
            </div>
            <div className="bg-gray-190 rounded-lg text-gray-600" style={projectStyle}>
                <h2 className="text-center mb-2 text-[20px]">Book library App</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, ullam. Explicabo est reprehenderit, porro quae voluptatem quis libero nesciunt eius doloribus perferendis officiis delectus saepe sunt sapiente placeat soluta eos.</p>
                <a href="https://book-library-fe-capstone.vercel.app/" target="blank"><button className="p-2 w-1/5 bg-teal-800 text-white hover:bg-teal-600">view</button></a>
            </div>
            <div className="bg-gray-190 rounded-lg text-gray-600" style={projectStyle}>
                <h2 className="text-center mb-2 text-[20px]">Website user interface</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, ullam. Explicabo est reprehenderit, porro quae voluptatem quis libero nesciunt eius doloribus perferendis officiis delectus saepe sunt sapiente placeat soluta eos.</p>
                <a href="https://tech-con-html-ten.vercel.app/" target="blank"><button className="p-2 w-1/5 bg-teal-800 text-white hover:bg-teal-600">view</button></a>
            </div>
            <div className="bg-gray-190 rounded-lg text-gray-600" style={projectStyle}>
                <h2 className="text-center mb-2 text-[20px]">Github search App</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, ullam. Explicabo est reprehenderit, porro quae voluptatem quis libero nesciunt eius doloribus perferendis officiis delectus saepe sunt sapiente placeat soluta eos.</p>
                <a href="https://alx-fe-reactjs-cyan.vercel.app/" target="blank"><button className="p-2 w-1/5 bg-teal-800 text-white hover:bg-teal-600">view</button></a>
            </div>
        </div>
        </main>
    );
}
export default Projects;