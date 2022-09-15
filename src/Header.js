import React from "react";
import "./header.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Header() {
  return (
    <>
      <div className="Horizontal"></div>
      <div className="Menu_bar">
        <img
          className="Logo"
          src="	https://www.starbucks.in/media/logo_tcm87-366_w1024_n.png"
          alt=""
        />
        <a className="find" href="/">
          <LocationOnIcon className="Location" />
          Finad A Store
        </a>
      </div>
      <div className="Menu">
        <a className="option coffee left" href="/">
          COFFEE
        </a>
        <a className="option menu middle" href="/">
          MENU
        </a>
        <a className="option coffeehouse middle" href="/">
          COFFEEHOUSE
        </a>
        <a className="option responsibility middle" href="/">
          RESPONSIBILITY
        </a>
        <a className="option rewards middle" href="/">
          REWARDS
        </a>
        <a className="option careers middle" href="/">
          CAREERS
        </a>
        <a className="option starbucks middle" href="/">
          STARBUCKS
        </a>
        <a className="option seasons middle" href="/">
          SEASON'S
        </a>
        <a className="option gifting middle" href="/">
          GIFTING
        </a>
        <a className="option starbucks middle" href="/">
          STARBUCKS
        </a>
        <a className="option delivers middle" href="/">
          DELIVERS
        </a>
        <a className="option aboutus right" href="/">
          ABOUT US
        </a>
      </div>
    </>
  );
}

export default Header;
