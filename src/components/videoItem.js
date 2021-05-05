import { Link } from "gatsby"
import React from "react"

import '../Styling/indexStyle.css'

const VideoItem = (prop) => {


return (
    <li class = "gridMobile videoListItem">
    <Link to = {"/videoPage"} state = {{ video: prop.link }} className = "videoListThumb"> <img className = "videoThumbImg" src = {prop.thumbnail}></img></Link>
    <Link to = {"/videoPage"} state = {{ video: prop.link }} ><h3 style={{fontSize:'15px'}}>{prop.title}</h3></Link>
    </li>
)
}

 
export default VideoItem
