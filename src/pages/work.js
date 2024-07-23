import React, { useState } from "react";
import { graphql } from "gatsby";

import PortfolioCard from "../components/PortfolioCard";
import Triangle from "../components/Triangle";


const WorkPage = ({ data }) => {

  const projects = data.allMarkdownRemark.nodes.map(({ frontmatter }) => ({
    ...frontmatter,
  }));

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
    {/* <div className="triangleContainerSmW">
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
      </div> */}
   
      <div className="card-view">

      <div id="section1"></div>
      <div id="section2"></div>
      {projects.map((project, index) => {
  // Check if the index is within the bounds of arrayConfigsTSmW
  if (index < arrayConfigsTSmW.length) {
    return (
      <React.Fragment key={index}>
<div className="triangleContainerSmW">
      <Triangle
        base={arrayConfigsTSmW[index].base}
        height={arrayConfigsTSmW[index].height}
        fillColor={arrayConfigsTSmW[index].fillColor}
        borderColor={arrayConfigsTSmW[index].borderColor}
        index={index}
        pageType='W'
      />

        </div>

        <PortfolioCard
          title={project.title}
          image={project.image}
          blurb={project.blurb}
          techUsed={project.techUsed}
          challenges={project.challenges}
          futureImprovements={project.futureImprovements}
          borderColor={project.borderColor}
          imageBorderColor={project.imageBorderColor}
        />

      </React.Fragment>
    );
  }
  // Optionally, return null or a placeholder component if there's no matching configuration
  return null; // or <PlaceholderComponent />;
})}

      </div>
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

export const Head = () => (
  <>
    <title>Work Examples</title>
    <meta name="description" content="Examples of past projects describing their purpose,
                                       tech stack, challenges, and future improvements." />
  </>
)

export default WorkPage;
