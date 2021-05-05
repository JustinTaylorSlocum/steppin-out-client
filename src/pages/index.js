import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ContentHeader from '../components/contentHeader'

import HomePageGreeting from "../components/homeGreeting"
import FeaturedVideo from "../components/featuredVideos"
import UpcomingGigs from "../components/UpcomingGigs"

import "../Styling/indexStyle.css"

const IndexPage = () => {
      return (
              <Layout>
                  <SEO title="Welcome to Steppin' Out" />
                  
                  <div style = {{marginBottom: "40px"}}>
                    <HomePageGreeting/>
                  </div>
                  
                  <div className = "content"> 
                              <article className = "introdText">
                                  <h2 className = "introdTitle">WELCOME TO STEPPIN' OUT</h2>
                                  <p className = "introdDesc">This is the official website for the Steppin' Out band. Hope you like what you see & hear. Please contact us with questions and performance inquiries. Thanks!</p>
                              </article>
                              <FeaturedVideo/>
                              <UpcomingGigs/>
                  </div>
              </Layout>
      )
}

export default IndexPage
