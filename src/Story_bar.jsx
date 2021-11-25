import React from "react";
import "./Story_bar.css";
import Stories from "./Stories";

const Story_bar = () => {
    return (
        <>
            <div className="story_container">
                <Stories/>
                <Stories/>
                <Stories/>
                <Stories/>
            </div>
        </>
    )
}
export default Story_bar;