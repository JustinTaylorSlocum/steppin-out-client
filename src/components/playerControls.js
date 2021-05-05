import { Link } from "gatsby"
import React, { useState } from 'react';
import Layout from "./layout"

const PlayerControls = (props) => {
        const press = () => {

                if (props.isPlaying) {
                        props.setPlay(false);
                } else {
                        props.setPlay(true);
                }
        }
        
        const next = () => { props.next(); }
        const prev = () => { props.prev(); }

        return (
                <div className = "primary-controls">
                                <div className = "audioButton previous">
                                    <button type = "button" className = "prevTrackButton" onClick = {prev}>
                                        <i className = "prevIcon"></i>
                                    </button>
                                </div>

                                <div className = "audioButton play">
                                        <button type = "button" className = "playTrackButton" onClick = {press}>
                                                <i className = {props.isPlaying ? "pauseIcon": "playIcon" }></i>
                                        </button>
                                </div>
                            
                                <div className = "audioButton next">
                                    <button type = "button" className = "nextTrackButton" onClick = {next}>
                                        <i className = "nextIcon"></i>
                                    </button>
                                </div>
                </div>
        );
};

export default PlayerControls
