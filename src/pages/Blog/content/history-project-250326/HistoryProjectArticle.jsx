import React from "react";

import NavBar from "../../../../components/NavBar";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import "../../BlogPage.css";

import markdown from "./text.md?raw";
import markdownRu from "./text-ru.md?raw";

import cover from "./cover_horizontal.webp";

import { useLanguage } from "../../../../assets/setLanguage";

import { LANG } from "../../LangBlog";

import SwitchLanguage from "../../../../components/SwitchLanguage";

function HistoryProjectArticle() {
  const [language, setLanguage] = useLanguage();
  const lang = LANG[language];

  return (
    <>
      <meta name="description" content={lang.titles.historyProject[1]}></meta>
      <title>{lang.titles.historyProject[0]}</title>
      <NavBar />

      <div className="margin-wrapper">
        <div className="article-page">
          <SwitchLanguage align="left" />
          <p className="blog-category">{lang.categories.personal}</p>
          <h1 className="article-title">{lang.titles.historyProject[0]}</h1>

          <p className="article-date">25 {lang.months.mar}, 2026</p>

          <img src={cover} alt="Cover" className="article-cover" />

          <hr />

          <div className="article-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {language === "RU" ? markdownRu : markdown}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default HistoryProjectArticle;
