import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import axios from 'axios';

import './layout.css';
import MobileStyle from './layout.css';
import NewPost from './newPost';
import Socials from './socialNavigation';
import SO_Alb_Cov from '../images/SO_Album_Square.png';

const SiteFooter = () => {
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
    <div className = "siteFoot">
        <div className = "footGrid">
            <div className = "gutters">

                <div className = "gridItem">
                    <h2 className = "sectionTitle">About Steppin' Out</h2>
                    <div style = {{marginBottom: '0', fontSize: '18px', fontWeight: '300'}}>
                    Steppin’ Out has been together for over 20 years, and played extensively throughout the northeast region. Years of experience performing live insure strong performances both by the vocalists and musicians. 
                    All the musicians are real professionals with extensive club, private function and recording studio experience.  
                    </div>
                </div>

                <div className = "gridItem">
                    <h2 className = "sectionTitle">Steppin' Out Greatest Hits</h2>
                    <p className = "featuredImage">
                        <Link to = "/music">
                        <img className = "albumImg" src = {SO_Alb_Cov}></img>  
                        </Link>
                    </p>
                </div>

                <div className = "gridItem">
                    <h2 className = "sectionTitle">Recent Posts</h2>
                    {newsPosts.slice(0, 3).map((post) => 
                        <NewPost title={post.title} date={post.date}/>
                    )}
                </div>
            </div>
        </div>
        <Socials/>
    </div>
    )
}



export default SiteFooter

