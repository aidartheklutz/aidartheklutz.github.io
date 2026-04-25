import { toggleDropdownMenu } from "./dropdown";
import logo from "../assets/logo_small_1.svg";
import React from "react";
import { NavLink } from "react-router";

function FullNavBar(props) {
  return (
    <div>
      {/* NAVBAR */}
      <div className="nav-wrapper">
        <NavLink to="/index.html">
          <img src={logo} id="navLogo" alt="logo" />
        </NavLink>

        <div className="nav">
          <p id="navMenu" onClick={toggleDropdownMenu}>
            <i className="bi bi-list"></i>
          </p>

          <p className="navbarLink">
            <NavLink to="/links">Links</NavLink>
          </p>
          <p className="navbarLink">
            <NavLink to="/portfolio">Portfolio</NavLink>
          </p>
          <p className="navbarLink">
            <NavLink to="/projects">Projects</NavLink>
          </p>
          <p className="navbarLink">
            <NavLink to="/gallery">Gallery</NavLink>
          </p>
          <p className="navbarLink">
            <NavLink to="/">Home</NavLink>
          </p>
        </div>
      </div>

      <div className="dropdownMenuWrapper">
        <div id="dropdownMenu" className="hide">
          <p className="navbarLinkDD">
            <NavLink to="/links">Links</NavLink>
          </p>
          <p className="navbarLinkDD">
            <NavLink to="/portfolio">Portfolio</NavLink>
          </p>
          <p className="navbarLinkDD">
            <NavLink to="/projects">Projects</NavLink>
          </p>
          <p className="navbarLinkDD">
            <NavLink to="/gallery">Gallery</NavLink>
          </p>
          <p className="navbarLinkDD">
            <NavLink to="/">Home</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

function Dropdown(props) {
  return (
    <div>
      <div className="dropdownMenuWrapper">
        <div id="dropdownMenu" className="hide">
          <p className="navbarLinkDD">
            <NavLink to="/links">Links</NavLink>
          </p>
          <p className="navbarLinkDD">
            <NavLink to="/portfolio">Portfolio</NavLink>
          </p>
          <p className="navbarLinkDD">
            <NavLink to="/projects">Projects</NavLink>
          </p>
          <p className="navbarLinkDD">
            <NavLink to="/gallery">Gallery</NavLink>
          </p>
          <p className="navbarLinkDD">
            <NavLink to="/">Home</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <>
      <FullNavBar />
      <Dropdown />
    </>
  );
}

export default NavBar;
