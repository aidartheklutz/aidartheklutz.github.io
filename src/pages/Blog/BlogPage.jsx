import React, { useEffect } from "react";
import "./BlogPage.css";
import NavBar from "../../components/NavBar";
import ctfCover from "./content/ctf-140526/cover.png";
import historyProjectCover from "./content/history-project-250326/cover.png";
import { NavLink } from "react-router";
import { useLanguage } from "../../assets/setLanguage";
import { LANG } from "./LangBlog";

function BlogPage() {
  const [language, setLanguage] = useLanguage();
  const lang = LANG[language];

  const posts = [
    {
      id: 1,
      title: lang.titles.ctf[0],
      description: lang.titles.ctf[1],
      image: ctfCover,
      category: lang.categories.story,
      date: `14 ${lang.months.may}, 2026`,
      path: "/blog/ctf-140526",
    },
    {
      id: 0,
      title: lang.titles.historyProject[0],
      description: lang.titles.historyProject[1],
      image: historyProjectCover,
      category: lang.categories.story,
      date: `25 ${lang.months.mar}, 2026`,
      path: "/blog/history-project-250326",
    },
  ];

  return (
    <>
      <NavBar />

      <div className="margin-wrapper">
        <div className="blog-page">
          <div className="heading-wrapper">
            <div className="heading">
              <h1 id="heading-longer">{lang.headingLonger}</h1>
              <h1 id="heading-shorter">{lang.headingShorter}</h1>
              <p>{lang.description}</p>
            </div>
          </div>

          <div className="blog-posts">
            {posts.map((post) => (
              <NavLink to={post.path} className="blog-post-tab" key={post.id}>
                <img src={post.image} alt={post.title} className="blog-cover" />

                <div className="blog-post-info">
                  <div className="blog-post-meta">
                    <p className="blog-category">{post.category}</p>

                    <p className="blog-date">{post.date}</p>
                  </div>

                  <h2 className="blog-post-title">{post.title}</h2>

                  <p className="blog-post-description">{post.description}</p>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPage;
