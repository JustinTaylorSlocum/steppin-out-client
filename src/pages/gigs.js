import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Axios from 'axios';

import ContentHeader from '../components/contentHeader'
import Container from '@material-ui/core/Container';
import  "../Styling/GigStyle.css"

import EventIcon from '@material-ui/icons/Event';
import GigItem from "../components/gigPageItem";
import GigBar from "../components/gigBar";

const GigPage = () =>  {
    var [gigEvents, setGigEvents] = useState([]); 

    useEffect(() => {
        loadData();
    }, []);
    const loadData = () => {
        Axios  
        .get('https://steppin-out-backend.herokuapp.com/api/gigEvents/getgigs')
        .then(res => {
            console.log(res.data);
            setGigEvents(res.data);
        });
    }

    if (gigEvents.length > 0) {
      var items = gigEvents.map((gig) =>
        <GigItem phone = {gig.phone} address = {gig.address} time = {gig.time} month = {gig.month} day = {gig.day} year = {gig.year} title = {gig.title} city = {gig.city} state = {gig.state} country = {gig.country} description = {gig.description}/>
      );
    } else {
      var items = <div style={{backgroundColor: '#6c6c6c1c', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: '30px', textAlign: 'center', paddingBottom: '20px'}}>
        <EventIcon style={{width: '6em', height: '6em', color: 'gray'}}/>
        <span style={{textAlign: 'center', color:'gray', marginLeft: '40px', marginRight: '40px'}}>Due to Covid-19 restrictions, we have no upcoming dates at the moment. Check back with us soon!</span>
        </div>
    }
  
    return (
      <Layout>
      <SEO title="Steppin' Out" />
      <GigBar loadData={loadData}/>
            <Container style = {{textAlign: 'center'}}>
                  <header className = "gigHeader">
                        <nav className = "gigNav" role = "navigation">
                            <ul>
                                <li className = "menuItem">
                                  <button>Upcoming</button>
                                </li>
                                <li className = "menuItem">
                                  <button>Past Dates</button>
                                </li>
                            </ul>
                        </nav>
                      </header>
                    <div className = "gigList" style = {{marginBottom: '50px !important'}}>
                        {items}
                    </div>
            </Container>      
    </Layout>
    )

}


export default GigPage
