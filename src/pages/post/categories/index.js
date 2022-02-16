import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import renderHTML from "react-render-html";

import "../main/css/woocommerce-layout.css";
import "../main/css/woocommerce-smallscreen.css";
import "../main/css/woocommerce.css";
import "../main/css/woocommerce.css";
import "../main/css/font-awesome.min.css";
import "../main/css/easy-responsive-shortcodes.css";
import "../main/style.css";

const PostCard = ({ post }) => {
  return (
    <article className="hentry">
      <header className="entry-header">
        <div className="entry-thumbnail">
          <Link to={`/posts/${post.slug}`} key={post.slug}>
            <img
              src={
                post.images.length > 0
                  ? post.images[0].url
                  : "https://www.themepush.com/demo-moschino/wp-content/uploads/sites/15/2015/09/p1.jpg"
              }
              className="attachment-post-thumbnail size-post-thumbnail wp-post-image img-fluid img-thumbnail"
              alt="p1"
            />
          </Link>
        </div>
        <h2 className="entry-title mt-2">
          <Link to={`/posts/${post.slug}`} key={post.slug}>
            {post.title}
          </Link>
        </h2>
        <p>{renderHTML(post.description.substring(0, 55))}</p>
      </header>
    </article>
  );
};

function CategoryPost() {
  const { slug } = useParams();

  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [postCategories, setPostCategories] = useState({});

  const getAllPost = () => {
    axios
      .get(`${process.env.REACT_APP_API}/postcategory/${slug}`)
      .then((res) => {
        if (res.data.posts.length > 0) {
          setPosts(res.data.posts);
        }
      });
  };

  const handleSearch = (value) => {
    if (value) {
      setSearch(value);
      axios
        .get(`${process.env.REACT_APP_API}/post/search/${value}`)
        .then((res) => {
          const postsData = res.data.filter(
            (i) => postCategories[i.postcategory] === slug
          );
          setPosts(postsData);
        });
    } else {
      setSearch("");
      getAllPost();
    }
  };

  useEffect(() => {
    setSearch("");
    getAllPost();
    axios.get(`${process.env.REACT_APP_API}/postcategories`).then((res) => {
      if (res.data) {
        const postCategoryData = {};
        for (let i = 0; i < res.data.length; i++) {
          const postCategory = res.data[i];
          postCategoryData[postCategory._id] = postCategory.slug;
        }
        setPostCategories(postCategoryData);
      }
    });
  }, [slug]);

  return (
    <div
      id="page"
      className="home page page-template page-template-template-portfolio page-template-template-portfolio-php"
    >
      <div className="container">
        <header id="masthead" className="site-header">
          <div className="site-branding">
            <h1 className="site-title">
              <Link to="/">Dental04</Link>
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
                  <Link to="/posts/category/dental-news">Dental News</Link>
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
          <div id="primary" className="content-area column full">
            <main id="main" className="site-main">
              <div>
                <input
                  type="text"
                  style={{ width: "100%", marginBottom: "10px" }}
                  placeholder="Search here"
                  value={search}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
              <div className="grid portfoliogrid d-flex">
                {posts.map((post) => {
                  return <PostCard post={post} />;
                })}
              </div>
              {/*<nav className="pagination">
                <span className="page-numbers current">1</span>
                <a className="page-numbers" href="#">
                  2
                </a>
                <a className="next page-numbers" href="#">
                  Next »
                </a>
              </nav>*/}
              <br />
            </main>
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
}

export default CategoryPost;