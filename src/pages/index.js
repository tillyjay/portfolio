import * as React from "react"
import "../styles/main.scss";
import "../components/Navigation"
import Navigation from "../components/Navigation";


const IndexPage = () => {
  return (
    <main>
    <Navigation />  
    <h1 className="firstIndexFont">HI. I'M TILLY JAY</h1>
    <h1 className="firstIndexFont">A</h1>
    <h1 className="secondIndexFont">Web Dev</h1>
    <h2 className="headersFont">Hello this is heading</h2>
    <p className="pTextFont">This is p text</p>
    </main>
  )
}

export default IndexPage

