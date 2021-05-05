import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"
import SiteFooter from "./siteFooter"
import AudioBar from './audioBar'
import MusicQueueList from './musicQueueList'
import FadeIn from 'react-fade-in';
import { Fade } from "@material-ui/core"

const Layout = ({ children }) => {
  
  return (
    <>
      <Header/>
        <FadeIn delay={500}>
          <main>{children}</main>
          <SiteFooter/>
        </FadeIn>
      <AudioBar/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
