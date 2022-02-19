import React, { useState, useEffect } from "react";
import axios from "axios";
import renderHTML from "react-render-html";

import { Link, useParams } from "react-router-dom";
import { getPostsByCount } from "../../functions/post";

const SinglePost = (props) => {
  const [post, setPost] = useState(null);
  const [postTime, setPostTime] = useState("");
  const [posts, setPosts] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    getPostsByCount(7).then((p) => {
      setPosts(p.data.reverse());
    });
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/post/${slug}`)
      .then((response) => {
        if (response.data) {
          setPost(response.data);
          const date = new Date(response.data.createdAt);
          const month = date.toLocaleString("en-us", {
            month: "long",
          });
          const day = date.getDate();
          const year = date.getFullYear();
          setPostTime(`${month} ${day}, ${year}`);
        }
      })
      .catch((error) => {
        console.log(`Error loading single post - ${error}`);
      });
  }, [slug]);

  return (
    <div className="container">
      <nav className="my-5 navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/posts" className="nav-link">Home</Link>
            </li>
            <li className="nav-item active">
              <Link to="/posts/category/dental-news" className="nav-link">Dental News</Link>
            </li>
            <li className="nav-item active">
              <Link to="/posts/category/technology" className="nav-link">Technology</Link>
            </li>
            <li className="nav-item active">
              <Link to="/posts/category/education" className="nav-link">Education</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="row mt-5">
        <div className="col-lg-8">
            {post && (
              <div className="bg-light p-4">
                  <h1 className="entry-title">{post.title}</h1>
                  <div className="entry-meta mb-3">
                    <span className="posted-on">
                      <time className="entry-date published">{postTime}</time>
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
                <div className="entry-content">
                  {renderHTML(post.description)}
                </div>
                </div>
            )}
        </div>
        <div className="col-lg-4">
          <div className="mb-5 wow slideInUp" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'slideInUp'}}>
            <div className="section-title section-title-sm position-relative mb-4" style={{ borderBottom: '3px solid #d8dcdf', fontSize:'20px'}}>
              <h3 className="mb-0 badge badge-dark">Recent Post</h3>
            </div>
            {posts.map((post) => {
              return (
                <div className="d-flex rounded overflow-hidden mb-3">
                  <img className="img-fluid" src={
                      post.images.length > 0
                        ? post.images[0].url
                        : "https://www.themepush.com/demo-moschino/wp-content/uploads/sites/15/2015/09/p1.jpg"
                    } style={{width: '100px', height: '100px', objectFit: 'cover'}} alt="" />
                  <Link to={`/posts/${post.slug}`} key={post.slug} className="h5 w-100 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">{post.title}</Link>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
};

export default SinglePost;
