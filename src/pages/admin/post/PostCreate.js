import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { createPost } from "../../../functions/post";
import PostCreateForm from "../../../components/forms/blog/PostCreateForm";
import {
  getPostCategories,
  getPostCategoryTags,
} from "../../../functions/postcategory";
import FileUpload from "../../../components/forms/FileUpload";
import { LoadingOutlined } from "@ant-design/icons";

const initialState = {
  title: "",
  postcategories: [],
  postcategory: "",
  tags: [],
  images: [
    // {
    //   public_id: "jwrzeubemmypod99e8lz",
    //   url:
    //     "https://res.cloudinary.com/dcqjrwaoi/image/upload/v1599480909/jwrzeubemmypod99e8lz.jpg",
    // },
    // {
    //   public_id: "j7uerlvhog1eic0oyize",
    //   url:
    //     "https://res.cloudinary.com/dcqjrwaoi/image/upload/v1599480912/j7uerlvhog1eic0oyize.jpg",
    // },
    // {
    //   public_id: "ho6wnp7sugyemnmtoogf",
    //   url:
    //     "https://res.cloudinary.com/dcqjrwaoi/image/upload/v1599480913/ho6wnp7sugyemnmtoogf.jpg",
    // },
  ],
};

const PostCreate = () => {
  const [values, setValues] = useState(initialState);
  const [tagOptions, setTagOptions] = useState([]);
  const [showTag, setShowTag] = useState(false);
  const [loading, setLoading] = useState(false);
  const [body, setBody] = useState({ description: "" });

  // redux
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadPostCategories();
  }, []);

  const { description } = body;

  const loadPostCategories = () =>
    getPostCategories().then((pc) =>
      setValues({ ...values, postcategories: pc.data })
    );

  const formData = { ...values, description };
  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(formData, user.token)
      .then((res) => {
        console.log(res);
        window.alert(`"${res.data.title}" is created`);
        // window.alert(`"${res.data.description}" is created`);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        // if (err.response.status === 400) toast.error(err.response.data);
        toast.error(err.response.data.err);
      });
  };

  const handleBody = (value) => {
    setBody({ description: value });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
  };

  const handlePostCatagoryChange = (e) => {
    e.preventDefault();
    console.log("CLICKED CATEGORY", e.target.value);
    setValues({ ...values, tags: [], postcategory: e.target.value });
    getPostCategoryTags(e.target.value).then((res) => {
      console.log("SUB OPTIONS ON CATGORY CLICK", res);
      setTagOptions(res.data);
    });
    setShowTag(true);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>

        <div className="col-md-10">
          {loading ? (
            <LoadingOutlined className="text-danger h1" />
          ) : (
            <h4>Create Post</h4>
          )}
          <hr />

          {/* {JSON.stringify(values.images)} */}

          <div className="p-3">
            <FileUpload
              values={values}
              setValues={setValues}
              setLoading={setLoading}
            />
          </div>

          <PostCreateForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            setValues={setValues}
            values={values}
            handlePostCatagoryChange={handlePostCatagoryChange}
            tagOptions={tagOptions}
            showTag={showTag}
            body={body.description}
            handleBody={handleBody}
          />
        </div>
      </div>
    </div>
  );
};

export default PostCreate;
