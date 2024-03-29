import React, { useEffect, useState } from "react"
import Navigation from "../Navigation"
import Footer from "../Footer"
import "../../styles/main.scss";



export default function Layout ({children}) {
const [footerIsHidden, setFooterIsHidden] = useState(false)
    function hideFooter() {
        setFooterIsHidden(true)
    }

    function showFooter() {
        setFooterIsHidden(false)
    }

    return (
        <div>
          <Navigation></Navigation>
            {children}
            {/* <Footer></Footer> */}
        </div>
    )
}

