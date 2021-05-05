import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import ContentHeader from '../components/contentHeader'
import Container from '@material-ui/core/Container';
import VideoItem from "../components/videoItem"
import AudioBar from '../components/audioBar'
import VideoData from "../data/videos.json"
import FadeIn from 'react-fade-in';

const VideoPage = () => {


  return (
    <>
      <Layout>
      <SEO title="Steppin' Out - Videos" />
      <ContentHeader headerText = "Videos"/>
            <Container>
                <ul className = "blockGrid">
                    {VideoData.map((video) => (
                      <VideoItem {...video}/>
                    ))}           
                </ul>
            </Container>  
               
      </Layout>
      <AudioBar/>  
    </>
  )

}

export default VideoPage
