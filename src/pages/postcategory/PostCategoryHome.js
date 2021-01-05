import React, { useState, useEffect } from "react";
import { getPostCategory } from "../../functions/postcategory";
import PostCard from "../../components/cards/PostCard.js";

const PostCategoryHome = ({ match }) => {
  const [postcategory, setPostCategory] = useState({});
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { slug } = match.params;

  useEffect(() => {
    setLoading(true);
    getPostCategory(slug).then((res) => {
      console.log(JSON.stringify(res.data, null, 4));
      setPostCategory(res.data.postcategory);
      setPosts(res.data.posts);
      setLoading(false);
    });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          {loading ? (
            <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
              Loading...
            </h4>
          ) : (
            <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
              {posts.length} Posts in "{postcategory.name}" post category
            </h4>
          )}
        </div>
      </div>

      <div className="row">
        {posts.map((p) => (
          <div className="col" key={p._id}>
            <PostCard post={p} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostCategoryHome;
