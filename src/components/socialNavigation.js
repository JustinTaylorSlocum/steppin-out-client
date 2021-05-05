import React from "react"

import Spotify from '../images/spotify.png'
import Youtube from '../images/youtube.png'
import Facebook from '../images/facebook.png'

const SocialNav= () => (
        <div style = {socialStyle}>
            <ul style = {socialButtons}>
                <li style = {socialButton}>
                    <a href = "https://www.youtube.com/user/4Watt/videos"><img src={Youtube}></img></a>
                </li>
                <li style = {socialButton}>
                    <a href = "https://www.facebook.com/Steppin-Out-Band-299156896685"><img alt="linkSoc" src={Facebook}></img></a>
                </li>

            </ul>
        </div>

)

const socialStyle = {
    fontSize: '1.6rem',
    paddingBottom: '2.0625em',
    paddingTop: '0.0625em',
    textAlign: 'center',
    marginBottom: '10px',
    borderTop: '1px solid rgba(0, 0, 0, 0.2)'
}

const socialButtons = {
    display: 'inline-block',
    listStyle: 'none',
    margin: '0',
    padding: '0'
}

const socialButton = {
    display:'inline-block',
    margin: '0.625em',
    cursor: 'pointer'
}


export default SocialNav

