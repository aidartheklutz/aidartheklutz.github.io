import "./HomePage.css";
import NavBar from "../../components/NavBar";
import raccoonDrawing from "../../assets/raccoon.png";
import { NavLink } from "react-router";

import React from "react";

function HomePage() {
  return (
    <>
      <NavBar />

      <div className="margin-wrapper">
        <div className="content">
          <div className="row-or-column">
            <div className="welcome">
              <h1 className="greeting" style={{ marginBottom: 0 }}>
                Hi, I'm Aidar!
              </h1>

              <p className="blue-link">
                I am a school student from Kyrgyzstan and I aspire to become an
                engineer. Here you can learn a little{" "}
                <NavLink to="/aboutme">about me</NavLink>, visit my{" "}
                <NavLink to="/gallery">gallery</NavLink>, check out some of the{" "}
                <NavLink to="/projects">projects</NavLink> of mine or find my{" "}
                <NavLink to="/links">socials</NavLink>.
              </p>

              <div className="socials-tray">
                <NavLink to="/aboutme" className="button-link">
                  About me
                </NavLink>

                <div className="socials-tray1">
                  <a
                    className="social"
                    href="https://bsky.app/profile/aid4r.bsky.social"
                  >
                    <i className="bi bi-bluesky"></i>
                  </a>
                  <a className="social" href="https://www.tiktok.com/@aid4r">
                    <i className="bi bi-tiktok"></i>
                  </a>
                  <a
                    className="social"
                    href="https://www.instagram.com/aidartheklutz"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a className="social" href="https://x.com/aidartheklutz">
                    <i className="bi bi-twitter"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="raccoonWrapper">
              <img src={raccoonDrawing} className="raccoon" alt="raccoon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
