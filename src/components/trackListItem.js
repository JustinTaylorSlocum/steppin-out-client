import React, {useState} from "react"

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

const TrackListItem = (props) => {
    const [isTPlaying, setIsTPlaying] = useState(false);

    const handleTrackClick = (t) => {
        if (isTPlaying) {
            props.setPlay(false);
            props.selHandler('');
        } else {
            props.new(t);
            props.setPlay(true);
            props.selHandler(props.trackName);
        }
        setIsTPlaying(!isTPlaying);
    }
  
  return (
            <li key={props.trackName} className = "trackListItem" style={props.selState == props.trackName ? {backgroundColor:'#8080803b'} : {backgroundColor:'transparent'}} onClick={() => handleTrackClick(props.trackName)}>
                {props.selState == props.trackName ? <PauseIcon style={{fontSize:'0.9em', marginRight:'9px'}}/> : <PlayArrowIcon style={{fontSize:'0.9em', marginRight:'9px'}}/>}
                <span>{props.trackName.substring(0, props.trackName.length - 4)}</span>

                <span className = "trackMeta">
                    <span className = "track-current-time">{props.currentTime}</span>
                    <span className = "track-sep">/</span>
                    <span className = "track-duration">{props.trackLength}</span>
                </span>

                <div className = "track-progress">
                    <div className = "track-seek-bar">
                        <div className = "track-play-bar">
                        </div>
                    </div>
                </div>
            </li>
    )
}

export default TrackListItem