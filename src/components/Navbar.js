import React from "react";
import logo from "../assets/images/Pillar-logo-text.png"
import "./navbar.css"


export default function Navbar() {
    return (
        <div className="header">
            <div className="navbar-wrapper">
                <img src={logo} alt="Pillar Logo" className="nav-logo" />
                <div className="nav-links">
                    <ul className="nav">
                        <li><a href="">Careers</a></li>
                    </ul>
                    <ul className="nav nav-lower-row">
                        <li><a href="">Home</a></li>
                        <li><a href="">Staffing Solutions</a></li>
                        <li><a href="">Consulting</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}