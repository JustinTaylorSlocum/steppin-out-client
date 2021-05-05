/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import React from "react"
 import PropTypes from "prop-types"
 import { useStaticQuery, graphql } from "gatsby"
 
 import Header from "./header"
 import "./layout.css"
 import BG from '../images/bg.jpg'
 import SiteFooter from "./siteFooter"
 import AudioBar from './audioBar'
 
 const Layout = ({ children }) => {
   return (
     <>
       <Header/>
        <div style = {{position: 'relative', zIndex: '1', margin: '0 auto', maxWidth: '1100px', padding: '0 1.0875rem 1.45rem'}}>
             <main>{children}</main>
        </div>
       <SiteFooter/>
       <AudioBar/>
     </>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 