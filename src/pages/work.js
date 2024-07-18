import React, { useState } from "react";
import { graphql } from "gatsby";

import PortfolioCard from "../components/PortfolioCard";
import Triangle from "../components/Triangle";


const WorkPage = ({ data }) => {
  // console.log(data.allMarkdownRemark.nodes);

  const projects = data.allMarkdownRemark.nodes.map(({ frontmatter }) => ({
    ...frontmatter,
  }));

  // console.log(projects);

  //triangle configs
  //triangle configs small
  const [arrayConfigsTSmW, setArrayConfigsTSmW] = useState([
    {
      base: 180,
      height: 280,
      fillColor: "#9C333E",
      borderColor: "#1e130c"
    },
    {
      base: 220,
      height: 260,
      fillColor: "#00ABC9",
      borderColor: "#1e130c"
    },
    {
      base: 60,
      height: 140,
      fillColor: "#00ABC9",
      borderColor: "#1e130c"
    },
    {
      base: 60,
      height: 140,
      fillColor: "#FFC736",
      borderColor: "#1e130c"
    },
    {
      base: 150,
      height: 200,
      fillColor: "#9C333E",
      borderColor: "#1e130c"
    },

  ]);



  return (
    <main className="work-main container">

    {/* triangle containers based on media query sizes */}
    <div className="triangleContainerSmW">
            {arrayConfigsTSmW.map(({ base, height, fillColor, borderColor }, index) => (
              <Triangle
                base={base}
                height={height}
                fillColor={fillColor}
                borderColor={borderColor}
                index={index}
                pageType='W' //indicate WorkPage
              />
            ))}
      </div>

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
