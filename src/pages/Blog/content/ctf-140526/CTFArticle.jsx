import React from "react";

import NavBar from "../../../../components/NavBar";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import "../../BlogPage.css";

import markdown from "./text.md?raw";
import markdownRu from "./text-ru.md?raw";

import cover from "./cover_horizontal.png";

import { useLanguage } from "../../../../assets/setLanguage";

import { LANG } from "../../LangBlog";

function CTFArticle() {
  const [language, setLanguage] = useLanguage();
  const lang = LANG[language];

  return (
    <>
      <NavBar />

      <div className="margin-wrapper">
        <div className="article-page">
          <p className="blog-category">{lang.categories.story}</p>
          <h1 className="article-title">{lang.titles.ctf[0]}</h1>

          <p className="article-date">25 {lang.months.mar}, 2026</p>

          <img src={cover} alt="Cover" className="article-cover" />

          <hr />

          <div className="article-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {language === "RU" ? markdownRu : markdown}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default CTFArticle;
