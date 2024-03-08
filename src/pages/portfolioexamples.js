import React from "react"
import { Link } from "gatsby"
import PortfolioCard from "../components/PortfolioCard";
import ex1 from "../images/ex1.png";    


const projects = [
    {
      title: "My Project 1",
      imageUrl: ex1,
      blurb: "A short project description for project 1.",
      techUsed: ["HTML", "CSS", "JavaScript"],
      challenges: ["Challenge 1", "Challenge 2"],
      futureImprovements: ["Improvement 1", "Improvement 2"]
    }
];


const PortfolioPage = () => {
    return (
      <div>
        {projects.map((project, index) => (
          <PortfolioCard
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            blurb={project.blurb}
            techUsed={project.techUsed}
            challenges={project.challenges}
            futureImprovements={project.futureImprovements}
          />
        ))}
      </div>
    );
  };

export default PortfolioPage;