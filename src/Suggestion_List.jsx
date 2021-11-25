import React from "react";
import "./User_Profile.css";
import "./Suggestion_List.css";


const Suggestion_List = (props)=>{
    return(
        <div className="sugg-cont own-Profile">
            <img src="https://source.unsplash.com/user/erondu" alt="Error" className="sgg-profile-pic profile_Pic" />
            <div className="sugg-names names">
                <p className="sugg-name profile-name"> scsdfv </p>
                <p className="sugg-abt user_name">asdvafbfadf</p>
            </div>
            <button className="sugg-follow btn-rgt">Follow</button>
        </div>
    )
}

export default Suggestion_List;