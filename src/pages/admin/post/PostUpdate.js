import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { getPost, updatePost } from "../../../functions/post";
import {
  getPostCategories,
  getPostCategoryTags,
} from "../../../functions/postcategory";
import FileUpload from "../../../components/forms/FileUpload";
import { LoadingOutlined } from "@ant-design/icons";
import PostUpdateForm from "../../../components/forms/blog/PostUpdateForm";

const initialState = {
  title: "",
  postcategories: [],
  postcategory: "",
  tags: [],
  images: [],
};

const PostUpdate = ({ match, history }) => {
  // state
  const [values, setValues] = useState(initialState);
  const [postcategories, setPostCategories] = useState([]);
  const [tagsOptions, setTagOptions] = useState([]);
  const [arrayOfTags, setArrayOfTags] = useState([]);
  const [selectedPostCategory, setSelectedPostCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [body, setBody] = useState("");
  const description = body;
  //const [body, setBody] = useState({ description: "" });
  const { user } = useSelector((state) => ({ ...state }));
  // router
  const { slug } = match.params;

  useEffect(() => {
    loadPost();
    loadPostCategories();
  }, []);

  const loadPost = () => {
    getPost(slug).then((p) => {
      // console.log("single product", p);
      // 1 load single proudct
      setValues({ ...values, ...p.data });
      setBody(p.data.description);
      //console.log(p.data.body)
      // 2 load single product category subs
      getPostCategoryTags(p.data.postcategory._id).then((res) => {
        setTagOptions(res.data); // on first load, show default subs
      });
      // 3 prepare array of sub ids to show as default sub values in antd Select
      let arr = [];
      p.data.tags.map((s) => {
        arr.push(s._id);
      });
      //console.log("ARR", arr);
      setArrayOfTags((prev) => arr); // required for ant design select to work
    });
  };

  const loadPostCategories = () =>
    getPostCategories().then((c) => {
      //console.log("GET CATEGORIES IN UPDATE PRODUCT", c.data);
      setPostCategories(c.data);
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    values.tags = arrayOfTags;
    values.postcategory = selectedPostCategory
      ? selectedPostCategory
      : values.postcategory;

    const formData = { ...values, description };
    updatePost(slug, formData, user.token)
      .then((res) => {
        setLoading(false);
        toast.success(`"${res.data.title}" is updated`);

        // console.log("body =>", body);
        // console.log("formData.description =>", formData.description);
        // console.log("description =>", description);

        // toast.success(`"${res.data.description}" is updated`);
        history.push("/admin/posts");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error(err.response.data.err);
      });
  };

  const handleBody = (value) => {
    setBody({ body: value });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
  };

  const handlePostCategoryChange = (e) => {
    e.preventDefault();
    console.log("CLICKED CATEGORY", e.target.value);
    setValues({ ...values, tags: [] });

    setSelectedPostCategory(e.target.value);

    getPostCategoryTags(e.target.value).then((res) => {
      console.log("SUB OPTIONS ON CATGORY CLICK", res);
      setTagOptions(res.data);
    });

    console.log("EXISTING CATEGORY values.postcategory", values.postcategory);

    // if user clicks back to the original postcategory
    // show its tags postcategories in default
    if (values.postcategory._id === e.target.value) {
      loadPost();
    }
    // clear old tags postcategory ids
    setArrayOfTags([]);
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
            <h4>Post update</h4>
          )}

          {/* {JSON.stringify(values)} */}

          <div className="p-3">
            <FileUpload
              values={values}
              setValues={setValues}
              setLoading={setLoading}
            />
          </div>

          <PostUpdateForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleChange={handleBody}
            setValues={setValues}
            setBody={setBody}
            values={values}
            body={body}
            handlePostCategoryChange={handlePostCategoryChange}
            postcategories={postcategories}
            //tagsOptions={tagsOptions}
            // arrayOfTags={arrayOfTags}
            // setArrayOfTags={setArrayOfTags}
            selectedPostCategory={selectedPostCategory}
          />
          <hr />
        </div>
      </div>
    </div>
  );
};

export default PostUpdate;
