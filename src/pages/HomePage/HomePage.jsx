import "./HomePage.css";
import NavBar from "../../components/NavBar";
import raccoonDrawing from "../../assets/raccoon.png";
import { NavLink } from "react-router";
import { useLanguage } from "../../assets/setLanguage";
import { LANG } from "./LangHomePage";
import SwitchLanguage from "../../components/SwitchLanguage";

import { BLOG_POSTS, getLocalizedPost } from "../Blog/blogPosts";
import { LANG as BLOG_LANG } from "../Blog/LangBlog";

import React, { useState } from "react";

function HomePage() {
  const [language, setLanguage] = useLanguage();
  const lang = LANG[language];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const blogLang = BLOG_LANG[language];
  const latestPosts = BLOG_POSTS.slice(0, 3).map((post) =>
    getLocalizedPost(post, blogLang),
  );

  const minSwipeDistance = 50;

  const nextSlide = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prev) => (prev === latestPosts.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prev) => (prev === 0 ? latestPosts.length - 1 : prev - 1));
  };

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      setCurrentIndex((prev) =>
        prev === latestPosts.length - 1 ? 0 : prev + 1,
      );
    } else if (isRightSwipe) {
      setCurrentIndex((prev) =>
        prev === 0 ? latestPosts.length - 1 : prev - 1,
      );
    }
  };

  const handleDotClick = (e, index) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex(index);
  };

  return (
    <>
      <NavBar />

      <div className="margin-wrapper homepage-wrapper">
        <div className="homepage-content">
          <SwitchLanguage />
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
                  <a className="social" href="https://github.com/aidartheklutz">
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    className="social"
                    href="https://www.linkedin.com/in/aidar-yrysov-011b8a426/"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a
                    className="social"
                    href="https://bsky.app/profile/aid4r.bsky.social"
                  >
                    <i className="bi bi-bluesky"></i>
                  </a>
                  <a
                    className="social"
                    href="https://www.instagram.com/aidartheklutz"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="raccoonWrapper">
              <img src={raccoonDrawing} className="raccoon" alt="raccoon" />
            </div>
          </div>

          <div className="new-posts-section">
            <h2>{lang.newBlogPosts}</h2>
            <div
              className="carousel-container"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <button
                className="carousel-btn prev"
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <i className="bi bi-chevron-left"></i>
              </button>

              <div className="carousel-track-wrapper">
                <div
                  className="carousel-track"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {latestPosts.map((post) => (
                    <NavLink
                      to={post.path}
                      className="carousel-slide"
                      key={post.id}
                    >
                      <div className="carousel-card">
                        <img
                          src={post.cover}
                          alt={post.title}
                          className="carousel-cover"
                        />
                        <div className="carousel-info">
                          <span className="carousel-category">
                            {post.category}
                          </span>
                          <h3 className="carousel-title">{post.title}</h3>
                          <p className="carousel-date">{post.dateLabel}</p>
                        </div>
                      </div>
                    </NavLink>
                  ))}
                </div>
              </div>

              <button
                className="carousel-btn next"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <i className="bi bi-chevron-right"></i>
              </button>

              <div className="carousel-indicators">
                {latestPosts.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
                    onClick={(e) => handleDotClick(e, index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
