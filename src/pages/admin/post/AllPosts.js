import React, { useEffect, useState } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { getPostsByCount } from "../../../functions/post";
import AdminPostCard from "../../../components/cards/AdminPostCard";
import { removePost } from "../../../functions/post";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";


const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  // redux
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadAllPosts();
  }, []);

  const loadAllPosts = () => {
    setLoading(true);
    getPostsByCount(100)
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleRemove = (slug) => {
    // let answer = window.confirm("Delete?");
    if (window.confirm("Delete?")) {
      // console.log("send delete request", slug);
      removePost(slug, user.token)
        .then((res) => {
          loadAllPosts();
          toast.error(`${res.data.title} is deleted`);
        })
        .catch((err) => {
          if (err.response.status === 400) toast.error(err.response.data);
          console.log(err);
        });
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>

        <div className="col">
          {loading ? (
            <h4 className="text-danger">Loading...</h4>
          ) : (
            <h4 className="mt-3">Update/Delete Posts</h4>
          )}
          <div className="row">
            {posts.map((post) => (
              <div key={post._id} className="col-md-4 pb-3">
                <AdminPostCard
                  post={post}
                  handleRemove={handleRemove}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
