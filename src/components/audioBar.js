import { Link } from "gatsby";
import React, {useState, useEffect} from "react";

import '../Styling/audioBar.css';

import { Howl } from 'howler';
import PH_Artwork from '../images/SO_Album_Square.png';
import musicData from '../data/music.json';

import PlayerControls from "./playerControls";
import PlayerTime from "./playerTime";
import VolumeSlider from "./volumeSlider";
import MusicQueueList from "./musicQueueList";

import Grid from '@material-ui/core/Grid';

const musicPath = './music/';
const trackList = musicData.map(track => track.title);
var curPage;


var currentTrack = 0;
var Sound = new Howl({
    src: [musicPath + trackList[currentTrack]],
    volume: 0.5
});

var prevVolume;

const AudioBar = () => {
    const [state, setState] = useState
    (
        {
            songTitle: "",
            songLength: "0:00",
            currentPos: "0:00"
        }
    );
    const [isPlaying, setIsPlaying] = useState(false);
    const [barVisible, setBarVisible] = useState(true);
    const [mute, setMute] = useState(false);

     useEffect(
        () => {
            let intr1 = setInterval(() => updatePlayer(), 1000);
            if (curPage !== window.location.href) {
                setPlay(false); 
                curPage = window.location.href;
            }
            if (curPage.includes("music")) {
                setBarVisible(false);
            } else {
                setBarVisible(true);
            }
             
            return () => {
                clearInterval(intr1);
            };
        }, []
     );

    const setPlay = (p) => {
        if (p) {
            Sound.play();
            setIsPlaying(true);
        } else {
            Sound.pause();
            setIsPlaying(false);
        }
        updatePlayer();
    }

    const updatePlayer = () => {
        setState({songTitle: Sound._src, songLength: Sound._duration.toFixed(0), currentPos: Sound.seek().toFixed(0)});
    }

    const newSong = (song) => {
        let currentVolume = Sound._volume;
        Sound.unload();

        Sound = new Howl({
            src: [musicPath + song],
            volume: currentVolume
        });
        updatePlayer(); 
    }
    
    const nextSong = () => {
        if (currentTrack < trackList.length - 1) {
            currentTrack += 1;
        } else {
            currentTrack = 0;
        }
        
        newSong(trackList[currentTrack]);  
        if (isPlaying) setPlay(true);
        
    }

    const prevSong = () => {
        if (currentTrack !== 0) {
            currentTrack -= 1;
        } else {
            currentTrack = trackList.length - 1;
        }
        newSong(trackList[currentTrack]); 
        if (isPlaying) setPlay(true);
    }

    const changeVolume = (v) => {
       Sound.volume(v);
    }

    const toggleMute = () => {
        if (mute) {
            Sound.volume(prevVolume);
        } else {
            prevVolume = Sound._volume;
            Sound.volume(0);
        }
        setMute(!mute);
    }

    return (
        <>
            <div className = {barVisible ? "audioBar" : "audioBar hide"}>
                <Grid className="controlGrid" justify = "flex-start" alignItems="flex-start" spacing={0} container>
                    
                <Grid className="playerControlGrid" item>
                    <PlayerControls isPlaying={isPlaying} setPlay={setPlay} next={nextSong} prev={prevSong}/>
                </Grid>

                <Grid justify="flex-start" spacing={0} direction="row" style ={{flexGrow: '1', maxWidth: 'none', paddingRight:'10px'}} height={50} container>
                                <Link to = "/music">
                                <span className = "audioArtwork">
                                    <img alt="albArt" className = "album-art-actual" src = {PH_Artwork}></img>
                                </span>
                                </Link>

                                <div className = "audio-track-details">
                                    <span className = "artist">Steppin' Out</span>
                                    <span className = "track">{state.songTitle.substring(8, state.songTitle.length - 4)}</span>
                                </div>
                                <PlayerTime position = {state.currentPos} tLength = {state.songLength} next = {nextSong}/>
                </Grid>

                <Grid style={{maxWidth:'50px', marginLeft: 'auto'}} item>
                    <VolumeSlider mute={mute} toggleMute={toggleMute} handler = {changeVolume}/>
                </Grid>


                <Grid style = {{maxWidth:'50px', marginLeft: 'auto'}}item>
                    <MusicQueueList handler={newSong} setPlay={setPlay}/>
                </Grid>

                </Grid>
                </div>
                </>
            )
        }

export default AudioBar