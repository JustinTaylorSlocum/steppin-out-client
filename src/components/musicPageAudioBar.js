import { Link } from "gatsby"
import React, {useEffect} from "react"

import '../Styling/audioBar.css'

import PH_Artwork from '../images/SO_Album_Square.png'

import PlayerControls from "./playerControls";
import PlayerTime from "./playerTime"
import VolumeSlider from "./volumeSlider"
import MusicQueueList from "./musicQueueList"

import Grid from '@material-ui/core/Grid';


const MusicPageAudioBar = (props) => {
    
    return (
        <>
            <div className = "audioBar">
                <Grid className="controlGrid" justify = "flex-start" alignItems="flex-start" spacing={0} container>
                    
                <Grid className="playerControlGrid" item>
                    <PlayerControls isPlaying={props.isPlaying} setPlay={props.setPlay} next={props.next} prev={props.prev}/>
                </Grid>

                <Grid justify="flex-start" spacing={0} direction="row" style ={{flexGrow: '1', maxWidth: 'none', paddingRight:'10px'}} height={50} container>
                                <Link to = "/music">
                                <span className = "audioArtwork">
                                    <img alt="albArt" className = "album-art-actual" src = {PH_Artwork}></img>
                                </span>
                                </Link>

                                <div className = "audio-track-details">
                                    <span className = "artist">Steppin' Out</span>
                                    <span className = "track">{props.playState.songTitle.substring(7, props.playState.songTitle.length - 4)}</span>
                                </div>
                                <PlayerTime position={props.playState.currentPos} tLength={props.playState.songLength} next={props.next}/>
                </Grid>

                <Grid style={{maxWidth:'50px', marginLeft: 'auto'}} item>
                    <VolumeSlider mute={props.mute} toggleMute={props.toggleMute} handler={props.cVolume}/>
                </Grid>

                <Grid style = {{maxWidth:'50px', marginLeft: 'auto'}}item>
                    <MusicQueueList handler={props.new} setPlay={props.setPlay}/>
                </Grid>
                </Grid>
                </div>
                </>
            )
        }

export default MusicPageAudioBar