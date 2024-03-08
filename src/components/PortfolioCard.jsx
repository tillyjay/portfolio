import React from "react";

const PortfolioCard = ({ title, imageUrl, blurb, techUsed, challenges, futureImprovements }) => {
    return (
      <div className="portfolioCard">
        <h1>{title}</h1>
        <div className="cardImage">
          <img src={imageUrl} alt={title} />
        </div>
        <p>{blurb}</p>
        <div className="details">
          <h3>Tech Used</h3>
          <ul>
            {techUsed.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <h3>Challenges</h3>
          <ul>
            {challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
          <h3>Future Improvements</h3>
          <ul>
            {futureImprovements.map((improvement, index) => (
              <li key={index}>{improvement}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

export default PortfolioCard;