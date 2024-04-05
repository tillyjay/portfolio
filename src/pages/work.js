import React from "react"

import PortfolioCard from "../components/PortfolioCard";
import Triangle from "../components/Triangle";

import '../styles/pagesStyles/workPage.scss';

//image imports
import ex1 from "../images/ex1.png";    
// import ex2 from "../images/ex2.png";   
// import ex3 from "../images/ex3.png"; 
// import ex4 from "../images/ex4.png";     
// import ex5 from "../images/ex5.png";   
// import ex6 from "../images/ex6.png";  


const projects = [
    {
      title: "My Project 1",
      image: ex1,
      blurb: "A short project description for project 1.",
      techUsed: ["HTML", "CSS", "JavaScript"],
      challenges: ["Challenge 1", "Challenge 2"],
      futureImprovements: ["Improvement 1", "Improvement 2"],
      borderColor: "#9C333E;", 
      imageBorderColor: "#00ABC9"
    }
];


const WorkPage = () => {
    

    return (
      <main className="container d-flex justify-content-center align-items-center">
        {projects.map((project, index) => (

          <PortfolioCard className="portfolioCard"
            key={index}
            title={project.title}
            imageUrl={project.image}
            blurb={project.blurb}
            techUsed={project.techUsed}
            challenges={project.challenges}
            futureImprovements={project.futureImprovements}
            borderColor={project.borderColor} 
            imageBorderColor={project.imageBorderColor} 
          />

        ))}


        
      </main>
    );
  };

export default WorkPage;