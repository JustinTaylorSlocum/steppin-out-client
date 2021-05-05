import { Link } from "gatsby"
import React, { useState } from 'react';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import AudioBarStyleSheet from '../Styling/audioBar.css'
//Placeholder Album Artwork
import PH_Artwork from '../images/sampleAlbumArtwork.jpg'

const AudioInfo = (PlayerInfo) => {

        return (
            <div class = "audioLayers">
            <span class = "audioArtwork">
                <img class = "album-art-actual" src = {PH_Artwork}></img>
            </span>
            <div class = "audio-track-details">
                <span class = "artist">Steppin' Out</span>
                <span class = "track"></span>
            </div>
            </div>
        );
};


export default AudioInfo
