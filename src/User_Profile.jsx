import React from "react";
import "./User_Profile.css";
import Suggestion_List from "./Suggestion_List";

const User_Profile = (props) => {
    return (
        <div className="profile-main-cont">
            <div className="own-Profile">
                <img src={props.profile_Pic} alt="Error" className="profile_Pic" />
                <div className="names">
                    <p className="profile-name">WebDev</p>
                    <p className="user_name">{props.user_name}</p>
                </div>
                <button className="btn-rgt">Switch</button>
            </div>
            <div className="sgtn_heading">
                <span className="lft">Suggestions For You</span>
                <button className="rgt">See all</button>
            </div>
            <Suggestion_List/>
            <Suggestion_List/>
            <Suggestion_List/>
            <Suggestion_List/>
            <Suggestion_List/>
            <div className="btm-text">
                <span className="links">
                    <a href="http://localhost:3000/">About . </a>
                    <a href="http://localhost:3000/">Help . </a>
                    <a href="http://localhost:3000/">Press . </a>
                    <a href="http://localhost:3000/">Jobs . </a>
                    <a href="http://localhost:3000/">Privacy . </a>
                    <a href="http://localhost:3000/">Terms . </a>
                    <a href="http://localhost:3000/">Locations . </a>
                    <a href="http://localhost:3000/">Top Accounts . </a>
                    <a href="http://localhost:3000/">Hashtags . </a>
                    <a href="http://localhost:3000/">Language . </a>
                </span>
            <div className="cpy-wrt">
            <svg className="copy-svg" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24" x="0"/></g><g><g><g><path d="M11.88,9.14c1.28,0.06,1.61,1.15,1.63,1.66h1.79c-0.08-1.98-1.49-3.19-3.45-3.19C9.64,7.61,8,9,8,12.14 c0,1.94,0.93,4.24,3.84,4.24c2.22,0,3.41-1.65,3.44-2.95h-1.79c-0.03,0.59-0.45,1.38-1.63,1.44C10.55,14.83,10,13.81,10,12.14 C10,9.25,11.28,9.16,11.88,9.14z M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8 s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z"/></g></g></g></svg>
            <span>2021 INSTAGRAM FROM META</span>
            </div>
            </div>
        </div>
    )
}
export default User_Profile;