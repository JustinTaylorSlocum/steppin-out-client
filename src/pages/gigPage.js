import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from '@material-ui/core/Container';
import ContentHeader from '../components/contentHeader'

var mapLink = "";
var gigDate, gigLocation, gigAddress, gigPhone, gigTime;

const GigPage = ({ location }) => {
    const [map, setMap] = useState("");

    const concatMapLink = () => {
        mapLink += "https://maps.google.com/maps?q=";
        var loc = gigAddress + " " + gigLocation;
        var temploc = loc.split(" ");
        for (var i = 0; i < temploc.length; i++) {
            mapLink += temploc[i] + "%20";
        }
        mapLink += "&output=svembed&amp;key=AIzaSyC9xLGs2WNWFEDBg-jWXBfAx9TQMCn-P9w";
        setMap(mapLink);
    }
    
     useEffect(() => {
        gigDate = location.state.video.month + " " + location.state.video.day + ", " + location.state.video.year;
        gigLocation = location.state.video.city + ", " + location.state.video.state + ", USA";
        gigAddress = location.state.video.address;
        gigTime = location.state.video.time;
        gigPhone = location.state.video.phone;

            mapLink = "";
            if (mapLink.length === 0) concatMapLink();
      }); 


    return (
            <Layout>
                <SEO title="Steppin' Out - Gigs" />
                <ContentHeader headerText = "Gigs"/>
                <Container>
                    <div class = "primGigI">
                        <article style = {{position: 'relative'}}>
                            <header class = "gigItemSide">
                                    <h2 class = "gigItemDate">
                                        <time>{gigDate}</time>
                                    </h2>
                                    <h3 class = "gigItemLocation">{gigLocation}</h3>
                            </header>
                            
                            <div class = "gigItemMeta">
                                <div class = "gigItemMetaInside">
                                    <div class = "gigAttributes">
                                        <div class = "gigItemListLabel">Time:</div>
                                        <div class = "gigItemList"> {gigTime} </div>
                                    </div>
                                </div>
                                <figure class="venue-map stretch-left">
                                <iframe title="venueMap" src={map} width="100%" height="255" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></figure>

                                <div class = "venueMeta">
                                    <h2 class = "venueTitle">Venue Details</h2>
                                    <div class = "gigAttributes">
                                        <div class = "gigItemListLabel">Address:</div>
                                        <div class = "gigItemList">{gigAddress}</div>
                                        <div class = "gigItemListLabel">Phone:</div>
                                        <div class = "gigItemList">{gigPhone}</div>    
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </Container>
            </Layout>
    )
}

export default GigPage
