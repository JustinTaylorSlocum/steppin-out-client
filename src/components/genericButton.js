import React from "react"
import { Link } from "gatsby"

import ContactStyle from "../Styling/contactPage.css"

const GenericButton = (props) => {

        const handleClick = () => {
            props.clickEvent();
        }


        return (
            <button onClick = {handleClick}>
                {props.label}
            </button>
        )
}

export default GenericButton