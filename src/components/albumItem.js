import React from "react"
import { Link } from "gatsby"

const AlbumItem = ({albumArtFiller}) => {

    return (
            <article class = "artItem">
                <a class = "artThumbnail">
                    <img class = "albImg" src = {albumArtFiller.img}></img>
                </a>

                <h2 class = "albTitle">
                    <Link to = {albumArtFiller.link}>
                        {albumArtFiller.title}
                    </Link>
                </h2>
                <p class = "albArtist">
                    {albumArtFiller.artist}
                </p>

            </article>

    )
}


export default AlbumItem
