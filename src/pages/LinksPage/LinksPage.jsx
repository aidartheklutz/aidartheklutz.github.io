import React from "react";
import "./LinksPage.css";
import NavBar from "../../components/NavBar";
import { LANG } from "./LangLinksPage";
import { useLanguage } from "../../assets/setLanguage";

const socials = [
  {
    name: "GitHub",
    handle: "aidartheklutz",
    link: "https://github.com/aidartheklutz",
    icon: "bi-github",
  },
  {
    name: "Bluesky",
    handle: "@aid4r.bsky.social",
    link: "https://bsky.app/profile/aid4r.bsky.social",
    icon: "bi-bluesky",
  },
  {
    name: "Instagram",
    handle: "@aidartheklutz",
    link: "https://www.instagram.com/aidartheklutz",
    icon: "bi-instagram",
  },
  {
    name: "TikTok",
    handle: "@aid4r",
    link: "https://www.tiktok.com/@aid4r",
    icon: "bi-tiktok",
  },
  {
    name: "Twitter",
    handle: "@aidartheklutz",
    link: "https://x.com/aidartheklutz",
    icon: "bi-twitter",
  },
  {
    name: "Telegram Channel",
    handle: "@theklutzcomm",
    link: "https://t.me/theklutzcomm",
    icon: "bi-telegram",
  },
  {
    name: "Telegram Profile",
    handle: "@aidartheklutz",
    link: "https://t.me/aidartheklutz",
    icon: "bi-telegram",
  },
  {
    name: "Threads",
    handle: "@aidartheklutz",
    link: "https://www.threads.com/@aidartheklutz",
    icon: "bi-threads",
  },
  {
    name: "Goodreads",
    handle: "aidartheklutz",
    link: "https://www.goodreads.com/aidartheklutz",
    icon: "bi-book-fill",
  },
];

function LinksPage(props) {
  const [language, setLanguage] = useLanguage();
  const lang = LANG[language];

  return (
    <>
      <NavBar />
      <div className="margin-wrapper">
        <main className="links-page">
          <div className="heading-wrapper">
            <div className="heading">
              <h1 id="heading-longer">{lang.headingLonger}</h1>
              <h1 id="heading-shorter">{lang.headingShorter}</h1>
              <p>{lang.description}</p>
            </div>
          </div>

          <div className="social-tiles" aria-label="Social media profiles">
            {socials.map((profile) => (
              <a
                className="social-link"
                href={profile.link}
                key={profile.name}
                target="_blank"
                aria-label={`Open ${profile.name} profile`}
              >
                <span className="social-icon">
                  <i className={`bi ${profile.icon}`}></i>
                </span>
                <span className="social-text">
                  <span className="social-name">{profile.name}</span>
                  <span className="social-handle">{profile.handle}</span>
                </span>
              </a>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export default LinksPage;
