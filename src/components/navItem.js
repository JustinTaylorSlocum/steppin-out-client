import React from "react"
import { Link } from "gatsby"

import "./layout.css"

const NavItem = (prop) => {

    return (
        <li className = "navItem">
        <Link to = {prop.link} className = "navLink">{prop.label}</Link>
        </li>
    )
}

export default NavItem