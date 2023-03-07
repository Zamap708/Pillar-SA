import React from "react";
import logo from "../assets/images/Pillar-logo-plain.png"
import "./navbar.css"


export default function Navbar() {
    return (
        <div className="header">
            <img src={logo} alt="Pillar Logo" className="nav-logo" />
            <ul className="nav">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
    )
}