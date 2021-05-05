import { Link } from "gatsby"
import React from "react"

import  '../Styling/MobileStyle.css'
import '../Styling/indexStyle.css'

import VideoItem from "./videoItem"

import VideoData from "../data/videos.json"

const FeaturedVideos = () => (


                    <div className = "videoContainer">
                        <h2 className = "videoTitle">Videos</h2>
                        <span className ="allVideosLink">
                            <Link to = "/videos">All Videos</Link>
                        </span>
                    <div className = "vidGrid">
                        <ul className = "vidUl">
                            {VideoData.map((video) => (
                                <VideoItem key={video} {...video}/>
                            ))}
                        </ul>
                    </div>

                    </div>
)


 
export default FeaturedVideos





