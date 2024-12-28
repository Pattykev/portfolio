import React from "react";
import Blog from "./Blog";
import Contact from "./Contact";
import Projects from "./Projects";
import Services from "./Services";
import { Link } from "react-router-dom";


function Home() {
    return(
  
   <div className="max-h-screen overflow-y-auto mt-15"> 
        <h1 > 
          Hey! Je suis Patricia TCHINGUE,
          tu peux aussi m'appeler Patty.
        </h1>
        <p>
          Je suis Developpeuse Frontend et ambassadrice du mouvement Nappy.
        </p>
        <div className="btn-container">
        <button><Link to="project">Voir mes projets</Link></button>
        &nbsp; &nbsp;
        <button><Link to="about">En savoir plus</Link> </button>
        </div>
  
        {/* <Projects /> */}
        {/* <Services /> */}
        {/* <Blog /> */}
        {/* <Contact /> */}

</div>
      
    );
}
export default Home;