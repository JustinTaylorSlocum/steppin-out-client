import React from "react"
import { Link } from "gatsby"

import Layout from "./layout"

const PlayerTime = (props) => {


    const processTime = (s) => {
       if (props.position == props.tLength - 1) props.next();
        let minutes = Math.floor(s / 60);
        let seconds = s - minutes * 60;
        let timeString = "";
        if (minutes < 10) {
            timeString += "0" + minutes + ":";
        } else {
            timeString += minutes + ":";
        }

        if (seconds < 10) {
            timeString += "0" + seconds;
        } else {
            timeString += seconds;
        }

        return timeString;
    }

  return (
    <div className = "time" style = {{marginLeft: 'auto'}}>
        <span className = "currenttime">{processTime(props.position)}</span>
        <span className = "time-seperator"> / </span>
        <span className = "time-total">{processTime(props.tLength)}</span>
    </div>
    )
}

export default PlayerTime