import React from "react";
import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import smartypants from "remark-smartypants";

import NavBar from "../../components/NavBar";
import SwitchLanguage from "../../components/SwitchLanguage";
import NotFound from "../NotFound/NotFound";
import { useLanguage } from "../../assets/setLanguage";
import { LANG } from "./LangBlog";
import { getBlogPostBySlug, getLocalizedPost } from "./blogPosts";
import "./BlogPage.css";

function BlogArticle() {
  const { slug } = useParams();
  const [language] = useLanguage();
  const lang = LANG[language];
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return <NotFound />;
  }

  const localizedPost = getLocalizedPost(post, lang);
  const markdown = language === "RU" ? post.markdownRu : post.markdown;

  return (
    <>
      <meta name="description" content={localizedPost.description}></meta>
      <title>{localizedPost.title}</title>
      <NavBar />

      <div className="margin-wrapper">
        <div className="article-page">
          <SwitchLanguage align="left" />
          <p className="blog-category">{localizedPost.category}</p>
          <h1 className="article-title">{localizedPost.title}</h1>

          <p className="article-date">{localizedPost.dateLabel}</p>

          <img
            src={localizedPost.articleCover}
            alt={localizedPost.title}
            className="article-cover"
          />

          <hr />

          <div className="article-content">
            <ReactMarkdown
              remarkPlugins={[
                remarkGfm,
                [
                  smartypants,
                  {
                    openingQuotes: { double: "«", single: "‹" },
                    closingQuotes: { double: "»", single: "›" },
                    dashes: "oldschool",
                    ellipses: false,
                  },
                ],
              ]}
              rehypePlugins={[rehypeRaw]}
            >
              {markdown}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogArticle;
