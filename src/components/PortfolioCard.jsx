import React from "react";

const PortfolioCard = ({
  title,
  image,
  blurb,
  techUsed,
  challenges,
  futureImprovements,
  borderColor,
  imageBorderColor
}) => {
  console.log(image);
  return (
    <div className="portfolioCard" style={{ borderColor }}>
      <h1 id="workTitle">{title}</h1>
      <div className="cardImage my-3 " style={{ borderColor: imageBorderColor }}>
        <img src={image} alt={title} />
      </div>
      <p className="para my-4">{blurb}</p>
      <div className="details">
        <h3 className="headers mb-2">Tech Used</h3>
        <ul>
          {techUsed.map((tech, index) => (
            <li className="my-2 para" key={index}>
              {tech}
            </li>
          ))}
        </ul>
        <h3 className="headers mt-4 mb-2">Challenges</h3>
        <ul>
          {challenges.map((challenge, index) => (
            <li className="my-2 para" key={index}>
              {challenge}
            </li>
          ))}
        </ul>
        <h3 className="headers mt-4 mb-2">Future Improvements</h3>
        <ul>
          {futureImprovements.map((improvement, index) => (
            <li className="my-2 para" key={index}>
              {improvement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PortfolioCard;
