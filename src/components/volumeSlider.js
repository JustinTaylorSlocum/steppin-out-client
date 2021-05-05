import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';

var prevVol;

const VolumeSlider = (props) => {
        const [isDisplayed, setIsDisplayed] = useState(false);
        

        const handleClick = () => {
            setIsDisplayed(!isDisplayed);
        }

        const handleSlideChange = (event, newValue) => {
            props.handler(newValue);
            if (props.mute) handleMute();
        }

        const handleMute = () => {
            props.toggleMute();
        }

        return (
            <div className="siteVolume" onMouseEnter={handleClick} onMouseLeave={handleClick}>
            <div className={isDisplayed ? "sliderContainer": "hide" }>
                        <Slider defaultValue={0.5} step={0.1} min={0} max={1} onChange = {handleSlideChange} orientation="vertical" style={{color: 'white'}}></Slider>
            </div>
            <div className = "audioBarWideBTN" onClick={handleMute}>
                        <Grid style={{maxWidth: '50px'}} item>
                            {props.mute ? <VolumeOffIcon style = {{color: 'white'}}/> : <VolumeUpIcon style = {{color: 'white'}}/>}
                        </Grid>
            </div>
            </div>
        )
};

export default VolumeSlider
