import React, { useState } from "react";

import Layout from "../components/app/Layout";
import Triangle from "../components/triangle";
import Circle from "../components/Circle";

import '../styles/pagesStyles/triangleIndex.scss';
import '../styles/pagesStyles/indexPage.scss';


const IndexPage = () => {

  //triangle configs
  const [arrayConfigsT, setArrayConfigsT] = useState([
    {
      base: 100,
      height: 200,
      fillColor: "#9C333E",
      borderColor: "#1e130c"
    }
  ]);

  //circle configs
  const [arrayConfigsC, setArrayConfigsC] = useState([
    {
      radius: 30,
      fillColor: "#9C333E",
      borderColor: "#1e130c"
    }
  ]);



  return (

  <main class="content container">

  
    <h1 className="firstIndexFont">HI. I'M </h1>
    <h1 className="firstIndexFont">TILLY JAY</h1>
    <h1 className="firstIndexFont">A</h1>
    <h1 className="secondIndexFont">Web Dev</h1>

    <div className="triangleContainer">
            {arrayConfigsT.map(({ base, height, fillColor, borderColor }, index) => (
              <Triangle
                base={base}
                height={height}
                fillColor={fillColor}
                borderColor={borderColor}
                index={index}
              ></Triangle>
            ))}
      </div>

      <div className="circleContainer">
              {arrayConfigsC.map(({ radius, fillColor, borderColor}, index) => (
                <Circle 
                  radius={radius}
                  fillColor={fillColor}
                  borderColor={borderColor}
                  index={index}
                ></Circle>
              ))}
      </div>

    </main>
          


  )
}

export default IndexPage

