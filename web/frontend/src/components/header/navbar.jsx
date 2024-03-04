import React from "react";
import "./navbar.scss";
import logo from "../../assets/logo";
import icons from "../../assets/icons";
import { Container, Divider } from "@mui/material";

function SocialMedia() {
    return (
        <div className="icon-glyph">
            <a href="https://www.facebook.com/">
                <img src={logo.facebook} alt="" />
            </a>
            <a href="http://" target="_blank">
                <img src={logo.twitter} alt="" />
            </a>
            <a href="http://" target="_blank">
                <img src={logo.youtube} alt="" />
            </a>
            <a href="http://" target="_blank">
                <img src={logo.instagram} alt="" />
            </a>
        </div>
    );
}

function Tools() {
    return (
        <tr className="tools-support">
            <a href="/ordertracking">
                <p className="h7 regular">Order tracking</p>
            </a>
            <a href="#">
                <p className="h7 regular">Help</p>
            </a>
            <div className="flex-row">
                <img className="image-language" src={logo.US} alt="" />
                <p className="h7 regular black">English(US)</p>
                <img src={icons.Chevron_down} alt="" />
            </div>
        </tr>
    );
}

export default function Navbar() {
    return (
        <div className="header-1">
            <SocialMedia />
            <Tools />
        </div>
    );
}
