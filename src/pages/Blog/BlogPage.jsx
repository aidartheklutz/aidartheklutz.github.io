import React, { useEffect } from "react";
import "./BlogPage.css";
import NavBar from "../../components/NavBar";
import ctfCover from "./content/ctf-140526/cover.webp";
import historyProjectCover from "./content/history-project-250326/cover_horizontal.webp";
import bugTermCover from "./content/bug-term-030726/cover.webp";
import elizaCover from "./content/eliza-050726/cover.webp";
import { NavLink } from "react-router";
import { useLanguage } from "../../assets/setLanguage";
import { LANG } from "./LangBlog";

function BlogPage() {
  const [language, setLanguage] = useLanguage();
  const lang = LANG[language];

  const posts = [
    {
      id: 3,
      title: lang.titles.eliza[0],
      description: lang.titles.eliza[1],
      image: elizaCover,
      category: lang.categories.essay,
      date: `5 ${lang.months.jul}, 2026`,
      path: "/blog/eliza-050726",
    },
    {
      id: 2,
      title: lang.titles.bugTerm[0],
      description: lang.titles.bugTerm[1],
      image: bugTermCover,
      category: lang.categories.essay,
      date: `3 ${lang.months.jul}, 2026`,
      path: "/blog/bug-term-030726",
    },
    {
      id: 1,
      title: lang.titles.ctf[0],
      description: lang.titles.ctf[1],
      image: ctfCover,
      category: lang.categories.personal,
      date: `14 ${lang.months.may}, 2026`,
      path: "/blog/ctf-140526",
    },
    {
      id: 0,
      title: lang.titles.historyProject[0],
      description: lang.titles.historyProject[1],
      image: historyProjectCover,
      category: lang.categories.personal,
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
