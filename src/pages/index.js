import React, { useState } from "react";

import Layout from "../components/app/Layout";
import Triangle from "../components/triangle";
import Circle from "../components/Circle";


import '../styles/pagesStyles/triangleIndex.scss';
import '../styles/pagesStyles/circleIndex.scss';
import '../styles/pagesStyles/indexPage.scss';


const IndexPage = () => {

  //triangle configs
  //triangle configs small
  const [arrayConfigsTSm, setArrayConfigsTSm] = useState([
    {
      base: 100,
      height: 300,
      fillColor: "#9C333E",
      borderColor: "#1e130c"
    },
    {
      base: 250,
      height: 300,
      fillColor: "#00ABC9",
      borderColor: "#1e130c"
    },
    {
      base: 300,
      height: 350,
      fillColor: "#FFC736",
      borderColor: "#1e130c"
    },
    {
      base: 190,
      height: 300,
      fillColor: "#00ABC9",
      borderColor: "#1e130c"
    },
    {
      base: 120,
      height: 300,
      fillColor: "#FFC736",
      borderColor: "#1e130c"
    },
    {
      base: 200,
      height: 350,
      fillColor: "#00ABC9",
      borderColor: "#1e130c"
    },
    {
      base: 70,
      height: 180,
      fillColor: "#9C333E",
      borderColor: "#1e130c"
    },
    {
      base: 150,
      height: 400,
      fillColor: "#9C333E",
      borderColor: "#1e130c"
    }, 
  ]);

  //triangle configs medium
  const [arrayConfigsTM, setArrayConfigsTM] = useState([
    {
      base: 200,
      height: 400,
      fillColor: "#9C333E",
      borderColor: "#1e130c"
    }
  ]);

  //triangle configs large
  const [arrayConfigsTL, setArrayConfigsTL] = useState([
    {
      base: 200,
      height: 400,
      fillColor: "#9C333E",
      borderColor: "#1e130c"
    }
  ]);


  //circle configs
  //circle config small
  const [arrayConfigsCSm, setArrayConfigsCSm] = useState([
    {
      diameter: 35,
      fillColor: "#00ABC9",
      borderColor: "#1e130c"
    },
    {
      diameter: 50,
      fillColor: "#00ABC9",
      borderColor: "#1e130c"
    },
    {
      diameter: 20,
      fillColor: "#FFC736",
      borderColor: "#1e130c"
    },
    {
      diameter: 20,
      fillColor: "#9C333E",
      borderColor: "#1e130c"
    },
    {
      diameter: 20,
      fillColor: "#9C333E",
      borderColor: "#1e130c"
    },
    {
      diameter: 20,
      fillColor: "#9C333E",
      borderColor: "#1e130c"
    },
    {
      diameter: 40,
      fillColor:  "#FFC736",
      borderColor: "#1e130c"
    },
    {
      diameter: 50,
      fillColor:  "#FFC736",
      borderColor: "#1e130c"
    },
    {
      diameter: 50,
      fillColor:  "#00ABC9",
      borderColor: "#1e130c"
    },
    {
      diameter: 50,
      fillColor:  "#9C333E",
      borderColor: "#1e130c"
    },

  ]);

  //circle config medium
  const [arrayConfigsCM, setArrayConfigsCM] = useState([
    {
      diameter: 30,
      fillColor: "#9C333E",
      borderColor: "#1e130c"
    }
  ]);

  //circle config large
  const [arrayConfigsCL, setArrayConfigsCL] = useState([
    {
      diameter: 30,
      fillColor: "#9C333E",
      borderColor: "#1e130c"
    }
  ]);


  return (

  <main class="content">
  
    <h1 className="firstIndexFont hi">HEY. I'M </h1>
    <h1 className="firstIndexFont name">TILLY JAY</h1>
    <h1 className="firstIndexFont lgA">A</h1>
    <h1 className="secondIndexFont web">web</h1>
    <h1 className="secondIndexFont dev">dev</h1>

    <div id="rect1"></div>
    <div id="rect2"></div>
    <div id="rect3"></div>

    <div id="rect4"></div>
    <div id="rect5"></div>
    <div id="rect6"></div>

    {/* triangle containers based on media query sizes */}
    <div className="triangleContainerSm">
            {arrayConfigsTSm.map(({ base, height, fillColor, borderColor }, index) => (
              <Triangle
                base={base}
                height={height}
                fillColor={fillColor}
                borderColor={borderColor}
                index={index}
              ></Triangle>
            ))}
      </div>

      <div className="triangleContainerM">
            {arrayConfigsTM.map(({ base, height, fillColor, borderColor }, index) => (
              <Triangle
                base={base}
                height={height}
                fillColor={fillColor}
                borderColor={borderColor}
                index={index}
              ></Triangle>
            ))}
      </div>

      <div className="triangleContainerL">
            {arrayConfigsTL.map(({ base, height, fillColor, borderColor }, index) => (
              <Triangle
                base={base}
                height={height}
                fillColor={fillColor}
                borderColor={borderColor}
                index={index}
              ></Triangle>
            ))}
      </div>

    {/* circle containers based on media query sizes */}
      <div className="circleContainerSm">
              {arrayConfigsCSm.map(({ diameter, fillColor, borderColor}, index) => (
                <Circle 
                diameter={diameter}
                  fillColor={fillColor}
                  borderColor={borderColor}
                  index={index}
                ></Circle>
              ))}
      </div>

      <div className="circleContainerM">
              {arrayConfigsCM.map(({ diameter, fillColor, borderColor}, index) => (
                <Circle 
                  diameter={diameter}
                  fillColor={fillColor}
                  borderColor={borderColor}
                  index={index}
                ></Circle>
              ))}
      </div>

      <div className="circleContainerL">
              {arrayConfigsCL.map(({ diameter, fillColor, borderColor}, index) => (
                <Circle 
                  diameter={diameter}
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

