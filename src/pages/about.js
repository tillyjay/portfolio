import * as React from "react";
import { graphql } from "gatsby";

import AboutMeCard from "../components/AboutMeCard";

const AboutPage = ({ data }) => {

  const about = data;
  const title = data.markdownRemark.frontmatter.title;
  const html = data.markdownRemark.html;

  return (
    <main className="about-main container">
      <AboutMeCard 
        title={title}
        blurb={html}
       />
    </main>
  );
};

export const aboutPageQuery = graphql`
query MyQuery {
  markdownRemark(fileAbsolutePath: {regex: "//pages/aboutMe-card.md/"}) {

      frontmatter {
        title
      }
      html
    }
  }
`;


export const Head = () => (
  <>
    <title>About Me</title>
    <meta name="description" content="Get to know me better with a little bit of back story." />
  </>
)

export default AboutPage;