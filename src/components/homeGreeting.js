import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import menuIcon from '../images/menu.png'
import NavItem from './navItem'
import "./layout.css"

import greetingImage from "../images/SO_Banner.jpg"

const HomeGreeting = () => {

  return (
            <figure class = "gImage">
                <img src = {greetingImage} width = "1600" height = "540"></img>
            </figure>
  )
}

export default HomeGreeting
