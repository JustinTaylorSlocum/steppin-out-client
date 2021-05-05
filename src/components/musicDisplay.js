import React, {useState} from "react"
import { Link } from "gatsby"

import TrackListItem from "./trackListItem"
import AlbCover from "../images/SO_Album_Square.png"
import musicData from '../data/music.json'

const MusicPage = (props) => {
    const [selected, setSelected] = useState('');

    const handleItemSelect = (trackitem) => {
        setSelected(trackitem);
    }

  return (
      <div className = "albDisplay">
            <div className = "displayArea">
                <div className = "displayContent">
                    <article style = {{margin: '0 0 1em', position: 'relative'}}></article>
                    <div className = "displayPrimary">
                        <header style = {{margin: '0 0 1em', marginBottom: '-30px'}}>
                            <h1 className = "recordTitle">{props.recordTitle}</h1>
                        </header>
                        <div className = "trackListSection">
                            <ol className = "trackList">
                                {musicData.map((track) => (
                                    <TrackListItem key={track.key} selState={selected} selHandler={handleItemSelect} setPlay={props.setPlay} new={props.new} trackName = {track.title} trackLength = {track.textLength} />
                                ))}
                            </ol>
                        </div>
                    </div>
                    <div className = "displaySecondary">
                        <figure className = "e-thumb">
                            <Link to  = "/music">
                                <img alt="albThum" width = "150" height = "150" src = {AlbCover} className="albThumb"></img>
                            </Link>
                        </figure>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default MusicPage