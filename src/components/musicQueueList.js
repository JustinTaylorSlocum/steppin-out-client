import React, { useState } from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import QueueItem from "./queueItem"
import Modal from '@material-ui/core/Modal';

import musicList from "../data/music.json"

const MusicQueueList = (props) => {
    const [isDisplayed, setDisplay] = useState(false);
    const handleMenuClick = () => {
        setDisplay(!isDisplayed);
    }

    return (
        <>
            <div className={isDisplayed ? "queue-tracks": "hide" }>
                    <ol className="queue-list">
                        {musicList.map((track) => (
                            <QueueItem key={track.title} title={track.title} length={track.textLength} handleClick={props.handler} setPlay={props.setPlay}/>
                        ))}
                    </ol>
            </div>

            <div className = "audioBarWideBTN" onClick={handleMenuClick}>
                {isDisplayed ? <ClearIcon style={{color:'white'}}/> : <MenuIcon style = {{color: 'white'}}/>}
            </div>
        </>                      
    )
}

    export default MusicQueueList