import React, { useState, useEffect } from "react";
//import Nav from './Nav';
import axios from "axios";
import AdminNav from "../../components/nav/AdminNav";
import renderHTML from "react-render-html";
import Laptop from "../../images/laptop.png";
import { Link, useParams } from "react-router-dom";
import { getPostsByCount, fetchPostsByFilter } from "../../functions/post";

const SinglePost = (props) => {
  const [post, setPost] = useState(null);
  const [posts, setPosts] = useState([]);
  const { slug } = useParams();
  console.log(slug);

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
          console.log("Single Post", response.data);
        }
      })
      .catch((error) => alert("Error loading single post"));
  }, [slug]);

  let categoreypost = [];
  let latestpost = [];
  let educategorypostdesc = [];
  let techcategorypostdesc = [];

  //latestpost.push(posts[0]);
  for (let i = 0; i < posts.length; i++) {
    const element = posts[i];
    if (i === posts.length - 1) {
      latestpost.push(posts[i]);
    }
    //console.log(element.postcategory.name === "Dental News");
    if (element.postcategory.name === "Dental News") {
      // console.log(i, ":", element.postcategory.name);
      categoreypost.push(posts[i]);
    }
    if (element.postcategory.name === "Education") {
      educategorypostdesc.push(posts[i]);
    }
    if (element.postcategory.name === "Technology") {
      techcategorypostdesc.push(posts[i]);
    }
  }

  let six_card = [
    ...categoreypost.slice(-2),
    ...educategorypostdesc.slice(-2),
    ...techcategorypostdesc.slice(-2),
  ];

  return (
    <div
      className="container"
      //   style={{ position: "relative", width: "700px", left: "200px" }}
    >
      <div className="row">
        {post && (
          <div className="col-md-8 col-12">
            <br />
            <div>
              <img
                className="p-1 img-fluid"
                src={post.images.length > 0 ? post.images[0].url : Laptop}
                style={{ width: "800px", height: "300px", objectFit: "cover" }}
              />

              <div> {post.title} </div>
              <hr />
              <div
                className="lead pt-3"
                dangerouslySetInnerHTML={{ __html: post.description }}
              />

              <p>
                Author <span className="badge">{post.user}</span> Published on{" "}
                <span className="badge">
                  {new Date(post.createdAt).toString()}
                </span>
              </p>
            </div>
          </div>
        )}
        <div
          className="col-md-4 col-12"
          style={{
            //     position: "absolute",
            //     height: "700px",
            //     //   width: "250px",
            //     left: "800px",
            //     top: "25px",
            backgroundColor: "blue",
          }}
        >
          ADS
          {six_card.map((p) => {
            return (
              <div
                style={{
                  backgroundColor: "white",
                  padding: "6px",
                  marginBottom: "11px",
                }}
              >
                <div
                  className="img-section d-inline-block"
                  style={{ maxWidth: "100px" }}
                >
                  <img
                    className="card-img"
                    src={
                      p.images && p.images.length ? p.images[0].url : p.laptop
                    }
                    style={{
                      minHeight: "67px",
                      maxHeight: "67px",
                      minWidth: "100px",
                      maxWidth: "100px",
                      //   marginTop: "4px",
                      //   marginLeft: "2px",
                    }}
                  />
                </div>
                <div
                  className="title-section d-inline-block pt-2 pl-3"
                  style={{}}
                >
                  <Link to={`/post/${p.slug}`}>
                    <span
                      style={{
                        color: "#000034",
                        fontWeight: "bold",
                      }}
                    >
                      {p.title}
                    </span>
                  </Link>
                  <br />
                  <span style={{ color: "#000034" }}>
                    {renderHTML(`${p.description.substring(0, 25)}`)}
                  </span>
                </div>
              </div>

              //   <div
              //     className="card"
              //     style={{
              //       minHeight: "75px",
              //       maxWidth: "400px",
              //       maxHeight: "75px",
              //       transform: "translateY(14px)",
              //       marginBottom: "15px",
              //     }}
              //   >
              //     <img
              //       className="card-img"
              //       src={p.images && p.images.length ? p.images[0].url : p.laptop}
              //       style={{
              //         minHeight: "67px",
              //         maxHeight: "67px",
              //         minWidth: "100px",
              //         maxWidth: "100px",
              //         marginTop: "4px",
              //         marginLeft: "2px",
              //       }}
              //     />

              //     <div
              //       className=""
              //       // style={{ width: "600px" }}
              //     >
              //       <Link to={`/post/${p.slug}`}>
              //         <p
              //           //className="card-text font-weight-bold text-white"
              //           className="card-text font-weight-bold"
              //           // style={{
              //           //   padding: "10px",
              //           //   backgroundColor: "rgba(0, 0, 52, 0.6)",
              //           //   position: "absolute",
              //           //   bottom: "60px",
              //           //   right: "0px",
              //           // }}
              //           style={{
              //             padding: "10px",
              //             color: "#000034",
              //             //   backgroundColor: "rgba(0, 0, 52, 0.6)",
              //             position: "absolute",
              //             // bottom: "60px",
              //             bottom: "38px",
              //             // right: "250px",
              //             right: "2px",
              //             left: "100px",
              //           }}
              //         >
              //           {p.title}
              //         </p>
              //       </Link>

              //       <span
              //         className="card-text"
              //         style={{
              //           //   position: "absolute",
              //           //   bottom: "10px",
              //           color: "white",
              //         }}
              //       >
              //         {renderHTML(`${p.description.substring(0, 70)}...`)}
              //       </span>
              //     </div>
              //   </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
