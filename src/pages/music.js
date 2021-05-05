import React, {useState, useEffect} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from '@material-ui/core/Container';
import {Howl, Howler} from 'howler';
import musicData from '../data/music.json';

import '../Styling/musicPage.css'
import  '../components/albumItem'
import ContentHeader from '../components/contentHeader'
import MusicDisplay from '../components/musicDisplay'
import MusicPageAudioBar from '../components/musicPageAudioBar'

const musicPath = "/music/";
const trackList = musicData.map(track => track.title);
var prevVolume;

var currentTrackM = 0;
var SoundM = new Howl({
    src: [musicPath + trackList[currentTrackM]],
    volume: 0.5
});

const MusicPage = () => {
  const [state, setState] = useState
  (
      {
          songTitle: "",
          songLength: "0:00",
          currentPos: "0:00"
      }
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [mute, setMute] = useState(false);

   useEffect(
        () => {
            let intr2 = setInterval(() => updatePlayer(), 1000);

            let checkLeave = setInterval(() => {
                if (!(window.location.href.includes("music"))) {
                    setPlay(false);
                    clearInterval(checkLeave);
                }
            }, 1000);
                

            return () => {
                clearInterval(intr2);
            };
        }, []
   );

    const setPlay = (p) => {
        if (p) {
            SoundM.play();
            setIsPlaying(true);
        } else {
            SoundM.pause();
            setIsPlaying(false);
        }
        updatePlayer();
    }

    const updatePlayer = () => {
        setState({songTitle: SoundM._src, songLength: SoundM._duration.toFixed(0), currentPos: SoundM.seek().toFixed(0)});
    }

    const newSong = (song) => {
        let currentVolume = SoundM._volume;
        SoundM.unload();

        SoundM = new Howl({
            src: [musicPath + song],
            volume: currentVolume
        });
        updatePlayer(); 
    }
    
    const nextSong = () => {
        if (currentTrackM < trackList.length - 1) {
            currentTrackM += 1;
        } else {
            currentTrackM = 0;
        }
        
        newSong(trackList[currentTrackM]);  
        if (isPlaying) setPlay(true);
        
    }

    const prevSong = () => {
        if (currentTrackM !== 0) {
            currentTrackM -= 1;
        } else {
            currentTrackM = trackList.length - 1;
        }
        newSong(trackList[currentTrackM]); 
        if (isPlaying) setPlay(true);
    }

    const changeVolume = (v) => {
       SoundM.volume(v);
    }

    const toggleMute = () => {
        if (mute) {
            SoundM.volume(prevVolume);
        } else {
            prevVolume = SoundM._volume;
            SoundM.volume(0);
        }
        setMute(!mute);
    }
  
  return (
      <>
        <Layout>
            <SEO title="Steppin' Out" />
                <ContentHeader headerText = "Our Music"/>
                    <Container>
                        <MusicDisplay new={newSong} setPlay={setPlay} recordTitle = "Steppin' Out - Audio Demos"/>
                    </Container>
        </Layout> 
        <MusicPageAudioBar className="hide" cVolume={changeVolume} new={newSong} next={nextSong} prev={prevSong} isPlaying={isPlaying} playState={state} setPlay={setPlay} toggleMute={toggleMute} mute={mute}/>
      </>

)
}

export default MusicPage
