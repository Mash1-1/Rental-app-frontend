// import React from "react";
import "./Header.css";

function Header(){
    return(
        <nav className="header">
            <h1>Rental App</h1>
            <div className="home">
            <a href="#home" className="home-link">Home</a>
            <a href="#about" className="home-link">About</a>
            <a href="#contact" className="home-link">Contact</a>
        </div>
        <div className="sign-btn">
            <button className="sign-in">Sign In</button>
            <button className="sign-up">Sign Up</button>
        </div>
        <div className="profile">
            <img src="" alt="User" className="user-img" />
            <span className="user-name">User Name</span>
        </div>
        </nav>
    );
}

export default Header;