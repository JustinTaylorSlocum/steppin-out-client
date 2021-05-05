import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import menuIcon from '../images/menu.png'
import NavItem from './navItem'
import "./layout.css"

const Header = () => {
  const [isMobVisible, setIsMobVisible] = React.useState(true);

  const handleNavClick = () => { setIsMobVisible(!isMobVisible);}

  return (
    <div className = "home">
      <Link to = "/">
          <h2 className = "websiteTitle">Steppin' Out</h2>
      </Link>
      <button className = "siteNavToggle" onClick = {handleNavClick}><img className = "menuButton" src = {menuIcon}></img>Menu</button>
      <ul className = {isMobVisible ? "navRow": "navRow showNav" } >
        <NavItem label = "Home" link = "/"/>
        <NavItem label = "About" link = "/about"/>
        <NavItem label = "Photos" link = "/photos"/>
        <NavItem label = "Music" link = "/music"/>
        <NavItem label = "Videos" link = "/videos"/>
        <NavItem label = "News" link = "/news"/>
        <NavItem label = "Gigs" link = "/gigs"/>
        <NavItem label = "Contact" link = "/contact"/>
        </ul>
      </div>

  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
