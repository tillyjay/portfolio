import * as React from "react";
import { graphql } from "gatsby";

import AboutMeCard from "../components/AboutMeCard";

const AboutPage = ({ data }) => {

  const about = data.allMarkdownRemark.nodes.map(({ frontmatter, html }) => ({
    ...frontmatter, html
  }));
  console.log(about);


  return (
    <main className="about-main container">
      <AboutMeCard 
        title={about[0].title}
        blurb={about[0].html}
       />
    </main>
  );
};

export const aboutPageQuery = graphql`
query MyQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "//pages//"}}) {
    nodes {
      frontmatter {
        title
      }
      html
    }
  }
}
`;


export default AboutPage;