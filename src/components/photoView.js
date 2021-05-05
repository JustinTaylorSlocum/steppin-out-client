import React from "react"
import { Link } from "gatsby"

import "../Styling/photoStyle.css"

const PhotoView = (props) => {
    // const [isHidden, setIsHidden] = React.useState(true);

    // const toggleView= () => {
    //     if (isHidden) {
    //         setIsHidden(false);
    //     } else {
    //         setIsHidden(true);
    //     }
    // }

    return (
        <div class = {props.isHidden ? "photoContainer": "hide" }>
            <div class = "photoView">
                <img class = "fullImg" src={props.img}/>
            </div>
        </div>
    )
}

export default PhotoView