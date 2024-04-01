import React, { useState } from "react"
import Navigation from "../Navigation"
import Footer from "../Footer"
import "../../styles/main.scss";



export default function Layout ({children, location }) {

    const showFooterCondition = location.pathname !== "/";

    return (
        <div>
          <Navigation />
            {children}
            {showFooterCondition && <Footer />} 
        </div>
    )
}

