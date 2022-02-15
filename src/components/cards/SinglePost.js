import React, { useState, useEffect } from "react";
import axios from "axios";
import renderHTML from "react-render-html";

import { Link, useParams } from "react-router-dom";
import { getPostsByCount } from "../../functions/post";

import "../../pages/post/main/css/woocommerce-layout.css";
import "../../pages/post/main/css/woocommerce-smallscreen.css";
import "../../pages/post/main/css/woocommerce.css";
import "../../pages/post/main/css/woocommerce.css";
import "../../pages/post/main/css/font-awesome.min.css";
import "../../pages/post/main/css/easy-responsive-shortcodes.css";
import "../../pages/post/main/style.css";

const SinglePost = (props) => {
  const [post, setPost] = useState(null);
  const [posts, setPosts] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    getPostsByCount(20).then((p) => {
      setPosts(p.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/post/${slug}`)
      .then((response) => {
        if (response.data) {
          setPost(response.data);
        }
      })
      .catch((error) => alert("Error loading single post"));
  }, [slug]);

  return (
    <div id="page">
      <div className="container">
        <header id="masthead" className="site-header">
          <div className="site-branding">
            <h1 className="site-title">
              <Link to="/">DENTAL04</Link>
            </h1>
          </div>
          <nav id="site-navigation" className="main-navigation">
            <button className="menu-toggle">Menu</button>
            <a className="skip-link screen-reader-text" href="#content">
              Skip to content
            </a>
            <div className="menu-menu-1-container">
              <ul id="menu-menu-1" className="menu">
                <li>
                  <Link to="/posts">Home</Link>
                </li>
                <li>
                  <Link to="/posts/category/dentalnews">Dental News</Link>
                </li>
                <li>
                  <Link to="/posts/category/technology">Technology</Link>
                </li>
                <li>
                  <Link to="/posts/category/education">Education</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div id="content" className="site-content">
          <div id="primary" className="content-area column two-thirds">
            <main id="main" className="site-main" role="main">
              {post && (
                <article>
                  <header className="entry-header">
                    <h1 className="entry-title">{post.title}</h1>
                    <div className="entry-meta">
                      <span className="posted-on">
                        <time className="entry-date published">
                          {post.createdAt}
                        </time>
                      </span>
                    </div>
                    <div className="entry-thumbnail thumbnail">
                      <img
                        src={
                          post.images.length > 0
                            ? post.images[0].url
                            : "https://www.themepush.com/demo-moschino/wp-content/uploads/sites/15/2015/09/p1.jpg"
                        }
                        alt=""
                      />
                    </div>
                  </header>
                  <div className="entry-content">
                    {renderHTML(post.description)}
                  </div>
                </article>
              )}
            </main>
          </div>
          <div id="secondary" className="column third">
            <div id="sidebar-1" className="widget-area" role="complementary">
              <aside
                id="recent-posts-2"
                className="widget widget_recent_entries"
              >
                <h4 className="widget-title">Recent Posts</h4>
                <ul>
                  {posts.reverse().map((post) => {
                    return (
                      <li>
                        <Link to={`/posts/${post.slug}`} key={post.slug}>
                          {post.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </div>
      <footer id="colophon" className="site-footer">
        <div className="container">
          <div className="site-info">
            <h1
              style={{
                fontFamily: "Herr Von Muellerhoff",
                color: "#ccc",
                fontWeight: "300",
                textAlign: "center",
                marginBottom: 0,
                marginTop: 0,
                lineHeight: 1.4,
                fontSize: "46px",
              }}
            >
              DENTAL04
            </h1>
            <p>&copy; DENTAL04 All Rights Reserved</p>
          </div>
        </div>
      </footer>
      <a href="#top" className="smoothup" title="Back to top">
        <span className="genericon genericon-collapse"></span>
      </a>
    </div>
  );
};

export default SinglePost;
