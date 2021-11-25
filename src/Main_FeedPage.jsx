import React from "react";
import Story_bar from "./Story_bar";
import Feeds from "./Feeds.jsx";
import cardData from "./cardData";
import User_Profile from "./User_Profile";
import "./Main_FeedPage.css";

const Main_FeedPage = () => {
   
    return (
        <div className="main_page">
            <div className="str-feed">
            <Story_bar />
            <Feeds
                username={cardData[0].username}
                profile_Pic={cardData[0].profile_Pic}
                feed_img={cardData[0].feed_img}
                comments={cardData[0].comments}
                upload={cardData[0].upload}
            />
            <Feeds
                username={cardData[1].username}
                profile_Pic={cardData[1].profile_Pic}
                feed_img={cardData[1].feed_img}
                comments={cardData[1].comments}
                upload={cardData[1].upload}
            />
            <Feeds
                username={cardData[2].username}
                profile_Pic={cardData[2].profile_Pic}
                feed_img={cardData[2].feed_img}
                comments={cardData[2].comments}
                upload={cardData[2].upload}
            />
            </div>
            
            <User_Profile
                profile_Pic={cardData[2].profile_Pic}
                user_name={cardData[2].username}
            />
        </div>
    )
}
export default Main_FeedPage;