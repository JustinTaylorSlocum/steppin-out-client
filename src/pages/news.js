import React, { useEffect, useState } from "react"
import axios from 'axios';
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentHeader from '../components/contentHeader'

import Container from '@material-ui/core/Container';

import NewsPostItem from '../components/newsPostItem';
import NewBar from '../components/newBar';

const NewsPage = () => {
   var [newsPosts, setNewsPosts] = useState([]); 

  useEffect(() => {
      loadData();
  }, []);

  const loadData = () => {
    axios  
    .get('https://steppin-out-backend.herokuapp.com/api/newsPosts/getallposts')
    .then(res => {
       setNewsPosts(res.data);
    });
  }

  return (
    <Layout>
      <SEO title="Steppin' Out - News" />
      <NewBar loadData={loadData}/>
          <Container>
                {newsPosts.map((post) => (
                  <NewsPostItem title={post.title} content={post.body} date={post.date}/>
                ))} 
          </Container>
    </Layout>
  )
}

export default NewsPage
