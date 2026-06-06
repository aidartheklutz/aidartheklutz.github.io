import React from "react";

import NavBar from "../../../../components/NavBar";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import "../../BlogPage.css";

import markdown from "./text.md?raw";
import cover from "./cover_horizontal.png";

function GoodreadsChallengesArticle() {
  return (
    <>
      <NavBar />

      <div className="margin-wrapper">
        <div className="article-page">
          <p className="blog-category">OPINION</p>
          <h1 className="article-title">My Opinion on Goodreads Challenges</h1>

          <p className="blog-date">25 March, 2026</p>

          <img src={cover} alt="Cover" className="article-cover" />

          <div className="article-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {markdown}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default GoodreadsChallengesArticle;
