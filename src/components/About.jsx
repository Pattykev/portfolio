import React from "react";
import imageSource from "/src/assets/profile-top.png";

function About() {
	const imageStyle={
		"transform": "rotate(3deg)"
	}
	return(
		< > 
		<main>
      	<div className="grid grid-rows-1 grid-flow-col gap-4 ml-10"  > 
				<img src={imageSource} alt="Patricia's image" style={imageStyle} className=" rounded-full" />
            <div className="mr-20 mt-25 text-pretty">
					<h1 className="p-8 text-center text-[24px]">Patricia Kevine TCHINGUE MAKAMTE, FullStack Developer, Nappy Ambassador</h1>
            		<p className="text-gray-600">
						🌟 À la croisée des chemins entre technologie et créativité, je suis une jeune femme passionnée qui incarne l'esprit d'innovation. Développeuse d'application de métier, je transforme des lignes de code en solutions élégantes qui simplifient le quotidien.
						<br/>
						💄 Ambassadrice d'un mouvement qui valorise l'entrepreneuriat féminin, je concoie ma propre ligne de cosmétiques, alliant beauté et éthique. Mon parcours est un reflet de ma polyvalence : toujours curieuse, je plonge avec enthousiasme dans chaque projet, cherchant à apprendre et à m'améliorer.
						<br/>
						🚀 Travailleuse acharnée, je crois fermement que la passion et l'engagement sont les clés du succès. Mon objectif ? Inspirer les autres à embrasser leur potentiel et à ne jamais cesser d'explorer. Que ce soit au cœur du code ou dans l'art de la cosmétique, je suis déterminée à laisser ma marque.
					</p>
					<p className="text-gray-600"> If you want to know more about download mu CV here:</p>
					<a href="../assets/TCHINGUE MAKAMTE Patricia Kevine.pdf" download="CV-Patricia TCHINGUE.pdf" target="blank">
    					<button type="button">Telecharger mon CV</button>
					</a>
					<div >
    					<h1 className="p-8 text-center text-[24px]">Programming languages and frameworks</h1>
    					<div className="bg-gray-400 grid grid-rows-2 grid-flow-col gap-4 text-gray-800 rounded-lg p-8 mb-8"> 
        					<span>JavaScript</span>
        					<span>TypeScript</span>
        					<span>Java</span>
        					<span>CSS3</span>
        					<span>HTML</span>
        					<span>React JS</span>
        					<span>Angular</span>
        					<span>Node JS</span>
        					<span>SQL</span>
        					<span>No SQL</span>
    					</div>
					</div>

					<div >
    					<h1 className="p-8 text-center text-[24px]">Services</h1>
    					<div className="bg-gray-400 grid grid-rows-4 grid-flow-col gap-4 text-gray-800 rounded-lg p-8">
        					<span>Developpement de site web(biographie familliale, entreprise, portfolio)</span>
        					<span>Develeppement d'application web complete pour automatiser la gestion de votre boite</span>
        					<span>Collaboration sur des projets</span>
        					<span>Design User Interface</span>
        					<span>Realisation de vos interfaces d'application</span>
        					<span>Conception et realisation de vos API securisees</span>
        					<span>Conseil d'entretien Capillaire pour cheveux Afro</span>
        					<span>Brand Ambassador de marque cosmetique capillaire pour cheveux Afro</span>
    					</div>
					</div>

        		</div>
			</div>
			</main>
      </>
   );
}
export default About;