import React, { useState } from 'react';

const QueueItem = (props) => {
    const handleClick = (t) => {
        props.handleClick(props.title);
        props.setPlay(true);
        console.log(props.title);
    }

    return (
        <li className="q-track" onClick={() => handleClick(props.title)}>
            <span className="q-track-details">
                <span className="q-track-title">{props.title}</span>
                <span className="q-track-artist">Steppin' Out</span>
            </span>
            <span className="q-track-actions q-track-cell"></span>
            <span className="q-track-length q-track-cell">{props.length}</span>
        </li>
    )
}

    export default QueueItem