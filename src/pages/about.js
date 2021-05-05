import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

import ContentHeader from '../components/contentHeader'
import Container from '@material-ui/core/Container';

import '../Styling/bioStyle.css'
import bandImg from '../images/bgblw.jpg'

const BioPage = () => (
  <Layout>
    <SEO title="Steppin' Out - About Us" />
    <ContentHeader headerText = "About Steppin' Out"/>
          <Container style = {{textAlign: 'center'}}>
                  <figure className = "bioImg">
                          <img className = "bandImg" width = "800" height = "auto" src = {bandImg}></img>
                      </figure>

                      <div className = "bioContent" style = {{fontFamily: 'QUICKSAND'}}>
                          <p>
                          Steppin’ Out has been together for over 20 years, and played extensively throughout the northeast region. Years of experience performing live insure strong performances both by the vocalists and musicians. All the musicians are real professionals with extensive club, private function and recording studio experience.
                          </p>

                          <p>
                          The band has developed a reputation as one of the most popular, entertaining and professional bands. Please take a moment to read the client list and the unsolicited letters of thanks from past clients. The music covered by the group includes songs from the all the genres of music and demographic. A strong emphasis is directed toward the hits of the of the various genres. We try to cover the 
                          classics and most popular from every decade. Jazz ballads, Rock & Roll, Motown, 80s Dance and Rock, progressive Rock of the 2000s, today’s R&B, Hip Hop and dance music. Everyone gets something to enjoy and dance to.
                          </p>

                          <p>
                          The band has performed throughout the New England, New York and northern New Jersey. Steppin Out‘s schedule includes engagements ranging from corporate events, weddings, festivals, fundraisers and clubs. The band travels with a professional sound system, stage & dance floor lighting
                          and other production insuring a high quality and consistent show.
                          </p>

                          <p>
                          To make sure the music never stops; We provide our clients continuous music. Our “DJ” collection and access to the most popular streaming services ensure we get to guests requests. We invite guests/patrons to request their favorite songs from our “request form”. "DJ" services are also available for cocktail / social hours as well “Live Musicians” performing.
                          </p>

                          <p>
                          The Steppin’ Out can be configured in different sizes and performers. The most popular configuration is the six piece band. Consisting of a female vocalist, bass/vocal, sax, drums, guitar/vocal and keyboards/vocal. We offer additional vocalists, horn players and production.
                          </p>
                      </div>
          </Container>
  </Layout>
)

export default BioPage
