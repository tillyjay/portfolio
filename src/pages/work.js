import React from "react";
import { graphql } from "gatsby";

import PortfolioCard from "../components/PortfolioCard";
// import Triangle from "../components/Triangle";


const WorkPage = ({ data }) => {
  // console.log(data.allMarkdownRemark.nodes);

  const projects = data.allMarkdownRemark.nodes.map(({ frontmatter }) => ({
    ...frontmatter,
  }));

  console.log(projects);

  return (
    <main className="work-main container">
      {projects.map((project, index) => (
        <PortfolioCard
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
