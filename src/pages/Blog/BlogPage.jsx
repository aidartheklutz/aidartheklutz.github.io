import React from "react";
import "./BlogPage.css";
import NavBar from "../../components/NavBar";
import { NavLink } from "react-router";
import { useLanguage } from "../../assets/setLanguage";
import { LANG } from "./LangBlog";
import { BLOG_POSTS, getLocalizedPost } from "./blogPosts";

function BlogPage() {
  const [language] = useLanguage();
  const lang = LANG[language];
  const posts = BLOG_POSTS.map((post) => getLocalizedPost(post, lang));

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
                <img src={post.cover} alt={post.title} className="blog-cover" />

                <div className="blog-post-info">
                  <div className="blog-post-meta">
                    <p className="blog-category">{post.category}</p>

                    <p className="blog-date">{post.dateLabel}</p>
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
