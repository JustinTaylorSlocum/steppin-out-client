import React from "react"
import { Link } from "gatsby"

import GigStyle from "../Styling/gigStyle.css"

const GigPageItem = (prop) => {


        return (
        <Link to = "/gigPage" state = {{ video: prop }}>
            <dl class = "event" >
                    <dd class = "gigdate date">
                        <time class = "start">
                            <span class = "format">{prop.month + " " + prop.day + ", " + prop.year}</span>
                            <span class = "format month">{prop.month}</span>
                            <span class = "format day">{prop.day}</span>
                        </time>
                    </dd>
                    <dt class = "gigTitle">{prop.title}</dt>
                    <dt class = "gigVenue">
                        <span class = "gigLocation">
                            <span class = "locality">{prop.city}</span>
                            <span class = "sep">, </span>
                            <span class = "state">{prop.state}</span>
                            <span class = "sep"></span>
                            <span class = "country"></span>
                        </span>
                    </dt>

                    <dd class = "gigDescription">
                        <p>{prop.description}</p>
                    </dd>
            </dl>
        </Link>
        )
}

export default GigPageItem;