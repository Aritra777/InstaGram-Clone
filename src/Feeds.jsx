import React from "react";
import "./Feeds.css";

const Feeds = (props) => {
    return (
        <div className="Feed_container">
            <div className="user_info">
                <img src={props.profile_Pic} alt="profile" className="userimg" />
                <div className="name">{props.username} </div>
                <span className="info"><i class="fa-solid fa-ellipsis"></i></span>
            </div>
            <div className="feed-img-cont">
                <img src={props.feed_img} alt="Error" className="feed_img" />
            </div>
            <div className="btm-logos">
                <div className="pos-left size">
                    <i class="far fa-heart mx"></i>
                    <i class="far fa-comment mx"></i>
                    <i class="fas fa-location-arrow mx"></i>
                </div>
                <div className="pos-right size">
                    <i class="far fa-bookmark"></i>
                </div>
            </div>
            <div className="given-info">
                <p className="likes">453 Likes</p><br />
                <span className="name btm-name">{props.username}</span>
                <span className="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed mollitia, ab tempore ipsa enim odit nobis minus amet animi exercitationem!
                </span>
            </div>
            <div className="cmt-time">
                <p className="cmt">View all {props.comments} Comments</p>
                <p className="upload">Uploaded {props.upload} hours ago</p>
            </div>
            <hr className="btm-hr" />
            <div className="comment-bar">              
                <span className="emoji">
                <i class="far fa-smile"></i>
                </span>
                <input type="text" placeholder="Add a Comment..." className="cmt-input" />
                <span className="ft-left">
                    <button className="post">Post</button>
                </span>
            </div>
        </div>
    )
}
export default Feeds;