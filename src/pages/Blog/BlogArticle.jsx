import React from "react";
import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import smartypants from "remark-smartypants";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

import NavBar from "../../components/NavBar";
import SwitchLanguage from "../../components/SwitchLanguage";
import NotFound from "../NotFound/NotFound";
import { useLanguage } from "../../assets/setLanguage";
import { LANG } from "./LangBlog";
import { getBlogPostBySlug, getLocalizedPost } from "./blogPosts";
import "./BlogPage.css";
import { shadesOfPurple } from "react-syntax-highlighter/dist/esm/styles/hljs";

function calculateReadingTime(markdownText) {
  if (!markdownText) return 0;

  // Remove code blocks
  let cleanText = markdownText.replace(/```[\s\S]*?```/g, "");
  // Remove inline code
  cleanText = cleanText.replace(/`[^`]+`/g, "");
  // Remove markdown images
  cleanText = cleanText.replace(/!\[.*?\]\(.*?\)/g, "");
  // Remove markdown links but keep the link text
  cleanText = cleanText.replace(/\[(.*?)\]\(.*?\)/g, "$1");
  // Remove HTML tags
  cleanText = cleanText.replace(/<[^>]+>/g, "");

  // Count words
  const words = cleanText
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;

  // Average reading speed: 200 words per minute
  const wpm = 200;
  return Math.ceil(words / wpm);
}

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
  const readingTime = calculateReadingTime(markdown) || 1;

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
          <p className="article-reading-time">
            {readingTime} {lang.readingTime}
          </p>

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
                    openingQuotes: { double: "«", single: "'" },
                    closingQuotes: { double: "»", single: "'" },
                    dashes: "oldschool",
                    ellipses: false,
                  },
                ],
              ]}
              components={{
                code({ inline, className, children }) {
                  const match = /language-(\w+)/.exec(className || "");

                  return !inline && match ? (
                    <SyntaxHighlighter
                      className="blog-code"
                      style={nightOwl}
                      language={match[1]}
                      showLineNumbers
                      wrapLongLines
                      customStyle={{
                        fontSize: "0.85rem",
                      }}
                      codeTagProps={{
                        style: {
                          fontSize: "0.85rem",
                        },
                      }}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className}>{children}</code>
                  );
                },
              }}
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
