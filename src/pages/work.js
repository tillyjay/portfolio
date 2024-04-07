import React from "react";
import { graphql } from "gatsby";

import PortfolioCard from "../components/PortfolioCard";
// import Triangle from "../components/Triangle";

import "../styles/pagesStyles/workPage.scss";


// const projects = [
//   {
//     title: "My Project 1",
//     image: "/images/ex2.png",
//     blurb: "A short project description for project 1.",
//     techUsed: ["HTML", "CSS", "JavaScript"],
//     challenges: ["Challenge 1", "Challenge 2"],
//     futureImprovements: ["Improvement 1", "Improvement 2"],
//     borderColor: "#9C333E;",
//     imageBorderColor: "#00ABC9",
//   },
// ];

const WorkPage = ({ data }) => {
  // console.log(data.allMarkdownRemark.nodes);

  const projects = data.allMarkdownRemark.nodes.map(({ frontmatter }) => ({
    ...frontmatter,
  }));

  console.log(projects);

  return (
    <main className="container d-flex justify-content-center align-items-center">
      {projects.map((project, index) => (
        <PortfolioCard
          className="portfolioCard"
          key={index}
          title={project.title}
          image={project.image}
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

export const projectsPageQuery = graphql`
  query MyQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "//projects//" } }) {
      nodes {
        frontmatter {
          title
          blurb
          image
          techUsed
          challenges
          futureImprovements
          borderColor
          imageBorderColor
        }
      }
    }
  }
`;

export default WorkPage;
