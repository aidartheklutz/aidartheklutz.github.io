import React from "react";
import "./BlogPage.css";
import NavBar from "../../components/NavBar";

import ctfCover from "./content/ctf-140526/cover.png";
import historyProjectCover from "./content/history-project-250426/cover.png";

import { NavLink } from "react-router";

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
    path: "/blog/history-project-250426",
  },
];

function BlogPage() {
  return (
    <>
      <NavBar />

      <div className="margin-wrapper">
        <div className="blog-page">
          <h1 className="blog-title">Blog</h1>

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
