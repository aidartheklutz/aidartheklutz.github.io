import "./HomePage.css";
import NavBar from "../../components/NavBar";
import raccoonDrawing from "../../assets/raccoon.png";
import { NavLink } from "react-router";
import { useLanguage } from "../../assets/setLanguage";
import { LANG } from "./LangHomePage";

import React from "react";

function HomePage() {
  const [language, setLanguage] = useLanguage();
  const lang = LANG[language];
  console.log(language);

  function handleSwitchLanguage() {
    setLanguage(language === "EN" ? "RU" : "EN");
    window.location.reload();
  }

  return (
    <>
      <NavBar />

      <div className="margin-wrapper homepage-wrapper">
        <div className="homepage-content">
          <div className="switch-language-button">
            <button onClick={handleSwitchLanguage}>
              <i className="bi bi-translate"></i> {lang.switchLang}
            </button>
          </div>
          <div className="row-or-column">
            <div className="welcome">
              <h1 className="greeting" style={{ marginBottom: 0 }}>
                {lang.greeting}
              </h1>

              {lang.description}

              <div className="socials-tray">
                <NavLink to="/aboutme" className="button-link">
                  {lang.aboutMe}
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
