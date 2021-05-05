import React, { useEffect, useState } from "react";

const NewsPostItem = (props) => {


    return (
        <article className="news-post-item">
            <header style={{marginBottom:'1.375em'}}>
                <h1 className="news-post-title">{props.title}</h1>
                <span className="news-post-info">BY STEPPIN' OUT ON {props.date}</span>
            </header>
            <div className="news-post-content">{props.content}</div>
        </article>
    )
}

export default NewsPostItem;