import React from "react";

import NavBar from "../../../../components/NavBar";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import "../../BlogPage.css";

import markdown from "./text.md?raw";
import cover from "./cover_horizontal.png";

function CTFArticle() {
  return (
    <>
      <NavBar />

      <div className="margin-wrapper">
        <div className="article-page">
          <p className="blog-category">STORY</p>
          <h1 className="article-title">My First CTF Experience</h1>

          <p className="blog-date">14 May, 2026</p>

          <img src={cover} alt="CTF Cover" className="article-cover" />

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

export default CTFArticle;
