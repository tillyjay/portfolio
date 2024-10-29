import React from "react";
import { graphql } from "gatsby";

import ResumeBlurb from "../components/ResumeBlurb";

import Triangle from "../components/Triangle";

const ResumePage = ({ data }) => {

  const resume = data; 
  const title = data.markdownRemark.frontmatter.title; 
  const html = data.markdownRemark.html;

  return (
    <main className="resume-main container">
      <ResumeBlurb 
        title={title} 
        blurb={html} 
      />

    </main>
  );
};


export const resumePageQuery = graphql`
  query ResumePageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/pages/resumeBlurb.md/" }) {
      frontmatter {
        title
      }
      html
    }
  }
`;

export const Head = () => (
  <>
    <title>Resume</title>
    <meta name="description" content="Resume followed by list of skills and volunteer work." />
  </>
)

export default ResumePage;