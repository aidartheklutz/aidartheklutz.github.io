import React from "react";

import NavBar from "../../../../components/NavBar";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import "../../BlogPage.css";

import markdown from "./text.md?raw";
import cover from "./cover_horizontal.png";

function HistoryProjectArticle() {
  return (
    <>
      <NavBar />

      <div className="margin-wrapper">
        <div className="article-page">
          <p className="blog-category">STORY</p>
          <h1 className="article-title">
            My Irrationally Large History Project
          </h1>

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

export default HistoryProjectArticle;
