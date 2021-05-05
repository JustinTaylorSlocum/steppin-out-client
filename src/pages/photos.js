import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../Styling/photoStyle.css"
import photoData from '../data/photos.json'
import { makeStyles } from '@material-ui/core/styles';
import ContentHeader from '../components/contentHeader'
import Container from '@material-ui/core/Container';
import Masonry from "react-responsive-masonry";
import ClearIcon from '@material-ui/icons/Clear';
import FadeIn from 'react-fade-in';

const useStyles = makeStyles((theme) => ({
  gridList: {
    width: 500,
    height: 450
  }
}));

const PhotoPage = () => {
  const [photoState, setPhotoState] = React.useState({
    img: undefined,
    isHidden: true
  });

  const toggleView = (toLoad) => {
    if (photoState.isHidden) {
        setPhotoState({img: toLoad, isHidden: false});
    } else {
      setPhotoState({img: photoState.img, isHidden: true});
    }
}

  return (
  <>
    <div className = {photoState.isHidden ? "hide" : "photoContainer"}>
        <div className = "photoView">
            <ClearIcon onClick={toggleView} style={{cursor:'pointer',position:'absolute',top:'20px',right:'30px',color:'white',fontSize:'3em'}}/>
            <img className = "fullImg" src={photoState.img}/>
        </div>
    </div>
    
  <Layout>
    <SEO title="Steppin' Out - Photos" />
      <ContentHeader headerText="Photos"/>
      
          <Container style={{marginBottom:'2em'}}>
            <Masonry className="mason-cont" columnsCount={2} gutter={5}>
            
              {photoData.map((image) => (
                <FadeIn key={image} delay={1000}><img onClick={() => toggleView(image)} src={image} /></FadeIn>
              ))}
              
            </Masonry>
          </Container>
          
  </Layout>
  </>
)
}

export default PhotoPage
