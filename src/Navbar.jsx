import React from "react";
import "./Navbar.css";
const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <h3>Instagram</h3>
                <input className="searchBar" type="text" placeholder="Search"></input>
                <div className="logos">
                    <i class="bi bi-house-door-fill margin_LR"></i>
                    <i class="bi bi-chat-dots margin_LR"></i>
                    <i class="bi bi-plus-square margin_LR"></i>
                    <i class="bi bi-compass margin_LR "></i>
                    <i class="bi bi-heart margin_LR"></i>
                    <img src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Profile" className="margin_LR" id="img_round" />
                </div>
            </div>
        </>
    )
}
export default Navbar;