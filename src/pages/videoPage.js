import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from '@material-ui/core/Container';
import ContentHeader from '../components/contentHeader'
import AudioBar from '../components/audioBar'

import "../Styling/videoStyle.css"

var videoLink;

const VideoPage = ({ location }) => {

  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    if (location.state.video !== null) {
      setVideoUrl(location.state.video);
    } else {
      setVideoUrl("https://www.youtube.com/embed/cbKum3NtLDg");
    }
    



  });

  return (
  <Layout>
    <SEO title="Steppin' Out - Videos" />
    <ContentHeader headerText = "Videos"/>
    <Container>
                <article>
                    <figure class = "vidOuter">
                        <div class = "vidWrapper">
                        <iframe width="1270" height="719" src={videoUrl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </figure>
                </article>
    </Container>
    <AudioBar/>
  </Layout>
)



}


export default VideoPage
