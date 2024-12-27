import React from "react";
import Blog from "./Blog";
import Contact from "./Contact";
import Projects from "./Projects";
import Services from "./Services";
import { Link } from "react-router-dom";


function Home() {
    return(
      <> 
    <div className="my-background-image"  >
      <div className="my-content" >
        <h1> 
          Hey! Je suis Patricia TCHINGUE, tu peux aussi m'appeler Patty.
        </h1>
        <p>
          Je suis Developpeuse Frontend et ambassadrice du mouvement Nappy.
        </p>
        <button><Link to="project">Voir mes projets</Link></button>
        &nbsp; &nbsp;
        <button><Link to="about">En savoir plus</Link> </button>
      </div>

        <Projects />
        <br />
        <Services />
        <br />
        <Blog />
        <br />
        <Contact />

    </div>


      </>
    );
}
import  "../css/Home.css";
export default Home;