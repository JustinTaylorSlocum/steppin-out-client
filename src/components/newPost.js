import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import MobileStyle from '../Styling/mobileStyle.css'


const NewsPost= (props) => {


    return (
        <li className = "recentPost" style = {Post}>
            <h5 className = "recent-post-title" style = {RecentPostTitle}>
                <Link to = "/news">{props.title}</Link>
            </h5>
            <time style = {RecentPostDate} className = "recent-post-date">{props.date}</time>
        </li>
    )

}

const Post = {
    paddingBottom: '0.8em',
    position: 'relative',
    marginBottom: '0.8em',
    listStyleType: 'none'
}

const RecentPostTitle = {
    fontSize: '0.75rem',
    fontWeight: '600',
    margin: '0',
    color: 'black'
}

const RecentPostDate = {
    fontSize: '0.8rem',
    letterSpacing: '0.1em',
    marginBottom: '0',
    textTransform: 'uppercase',
    position: 'absolute',
    bottom: '0',
    color: 'rgba(0, 0, 0, 0.7)'
}

export default NewsPost

