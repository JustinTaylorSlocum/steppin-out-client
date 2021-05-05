import React from "react"

import "./layout.css"


const ContentHeader = ({headerText}) => {
    return (
            <header className = "content-header">
                <div className = "headerFence">
                    <h1 className = "cHeaderTitle">{headerText}</h1>
                </div>
            </header>
    )
}

export default ContentHeader