import React from "react";
import "./BlogPage.css";
import NavBar from "../../components/NavBar";
import ctfCover from "./content/ctf-140526/cover.png";
import historyProjectCover from "./content/history-project-250326/cover.png";
import { NavLink } from "react-router";
import { useLanguage } from "../../assets/setLanguage";
import { LANG } from "./LangBlog";

const posts = [
  {
    id: 1,
    title: "My First CTF Experience",
    description:
      "How I tried to learn the basics of cybersecurity in 4 days and win a CTF.",
    image: ctfCover,
    category: "STORY",
    date: "14 May, 2026",
    path: "/blog/ctf-140526",
  },
  {
    id: 0,
    title: "My Irrationally Large History Project",
    description: "I met the criteria. Then I kept going.",
    image: historyProjectCover,
    category: "STORY",
    date: "25 March, 2026",
    path: "/blog/history-project-250326",
  },
];

const posts_RU = [
  {
    id: 1,
    title: "Мой первый опыт в CTF",
    description:
      "Как я попытался выучить базу по кибербезопасности за 4 дня и победить в CTF.",
    image: ctfCover,
    category: "STORY",
    date: "14 May, 2026",
    path: "/blog/ctf-140526",
  },
  {
    id: 0,
    title: "My Irrationally Large History Project",
    description: "I met the criteria. Then I kept going.",
    image: historyProjectCover,
    category: "STORY",
    date: "25 March, 2026",
    path: "/blog/history-project-250326",
  },
];

function BlogPage() {
  const [language, setLanguage] = useLanguage();
  const lang = LANG[language];
  // let postsByLanguage = language === "EN" ? posts : posts_RU;
  const postsByLanguage = posts;

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
            {postsByLanguage.map((post) => (
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
