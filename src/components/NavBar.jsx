import { toggleDropdownMenu } from "./dropdown";
import logo from "../assets/logo_small_1.svg";
import React from "react";
import { NavLink } from "react-router";

function NavBar(props) {
  return (
    <div>
      {/* NAVBAR */}
      <div className="nav-wrapper">
        <NavLink to="/index.html">
          <img src={logo} id="navLogo" alt="logo" />
        </NavLink>

        <div className="nav">
          <p id="navMenu" onClick={toggleDropdownMenu}>
            <span class="material-symbols-outlined">menu</span>
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
            <NavLink to="/blog">Blog</NavLink>
          </p>
          <p className="navbarLink">
            <NavLink to="/">Home</NavLink>
          </p>
        </div>
      </div>

      <div className="dropdownMenuWrapper">
        <div id="dropdownMenu" className="hide">
          <p className="navbarLinkDD">
            <NavLink to="/links">
              <i className="bi bi-folder-symlink-fill"></i> Links
            </NavLink>
          </p>
          <p className="navbarLinkDD">
            <NavLink to="/portfolio">
              <i className="bi bi-bookmark-fill"></i> Portfolio
            </NavLink>
          </p>
          <p className="navbarLinkDD">
            <NavLink to="/projects">
              <i className="bi bi-file-earmark-code-fill"></i> Projects
            </NavLink>
          </p>
          <p className="navbarLinkDD">
            <NavLink to="/blog">
              <i className="bi bi-pen-fill"></i> Blog
            </NavLink>
          </p>
          <p className="navbarLinkDD">
            <NavLink to="/">
              <i className="bi bi-house-fill"></i> Home
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
