import { toggleDropdownMenu } from "./dropdown";
import logo from "../assets/logo_small_1.svg";
import React from "react";
import { NavLink } from "react-router";
import { useLanguage } from "../assets/setLanguage";
import { LANG } from "./LangNavBar";

function NavBar(props) {
  const [language, setLanguage] = useLanguage();
  const lang = LANG[language];

  return (
    <div>
      {/* NAVBAR */}
      <div className="nav-wrapper">
        <NavLink to="/">
          <img src={logo} id="navLogo" alt="logo" />
        </NavLink>

        <div className="nav">
          <p id="navMenu" onClick={toggleDropdownMenu}>
            <span className="material-symbols-outlined">menu</span>
          </p>

          <p className="navbarLink">
            <NavLink to="/links">{lang.links}</NavLink>
          </p>
          <p className="navbarLink">
            <NavLink to="/portfolio">{lang.portfolio}</NavLink>
          </p>
          <p className="navbarLink">
            <NavLink to="/projects">{lang.projects}</NavLink>
          </p>
          <p className="navbarLink">
            <NavLink to="/blog">{lang.blog}</NavLink>
          </p>
          <p className="navbarLink">
            <NavLink to="/">{lang.home}</NavLink>
          </p>
        </div>
      </div>

      <div className="dropdownMenuWrapper">
        <div id="dropdownMenu" className="hide">
          <p className="navbarLinkDD">
            <NavLink to="/links">
              <i className="bi bi-folder-symlink-fill"></i> {lang.links}
            </NavLink>
          </p>
          <p className="navbarLinkDD">
            <NavLink to="/portfolio">
              <i className="bi bi-bookmark-fill"></i> {lang.portfolio}
            </NavLink>
          </p>
          <p className="navbarLinkDD">
            <NavLink to="/projects">
              <i className="bi bi-file-earmark-code-fill"></i> {lang.projects}
            </NavLink>
          </p>
          <p className="navbarLinkDD">
            <NavLink to="/blog">
              <i className="bi bi-pen-fill"></i> {lang.blog}
            </NavLink>
          </p>
          <p className="navbarLinkDD">
            <NavLink to="/">
              <i className="bi bi-house-fill"></i> {lang.home}
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
