import { Link } from "gatsby"
import React, { useState, useEffect} from "react"
import GigItem from "../components/gigPageItem"
import EventIcon from '@material-ui/icons/Event';
import Axios from 'axios';

import "../Styling/indexStyle.css"

const UpcomingGigs = () => {
  var [gigEvents, setGigEvents] = useState([]); 

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    Axios  
    .get('https://steppin-out-backend.herokuapp.com/api/gigEvents/getgigs')
    .then(res => {
        setGigEvents(res.data);
    });
}

    if (gigEvents.length > 0) {
        var items = gigEvents.slice(0, 3).map((gig) =>
          <GigItem key={gig} phone = {gig.phone} address = {gig.address} time = {gig.time} month = {gig.month} day = {gig.day} year = {gig.year} title = {gig.title} city = {gig.city} state = {gig.state} country = {gig.country} description = {gig.description}/>
        );
      } else {
        var items = <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: '30px', marginBottom: '30px'}}>
          <EventIcon style={{width: '8em', height: '8em', color: 'gray'}}/>
          <span style={{color:'gray', fontSize: '0.6em', marginLeft: '10px', marginRight: '10px', textAlign: 'center'}}>Due to Covid-19 restrictions, we have no upcoming dates at the moment. Check back with us soon!</span>
          </div>
      }

    return (
        <div className = "gigOuter">
            <h2 className = "upcomingGigsHead">Upcoming Gigs</h2>
            <div className = "gigListHome">
                {items}
            </div>
            <div className = "gigFooter">
                <Link to = "/gigs" className = "gigsArchLink">View All Gigs</Link>
            </div>
        </div>
    )

}

export default UpcomingGigs





