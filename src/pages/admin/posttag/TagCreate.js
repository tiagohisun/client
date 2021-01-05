import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { getPostCategories } from "../../../functions/postcategory";
import { createTag, getTag, removeTag, getTags } from "../../../functions/posttag";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import PostCategoryForm from "../../../components/forms/blog/PostCategoryForm";
import LocalSearch from "../../../components/forms/LocalSearch";

const TagCreate = () => {
  const { user } = useSelector((state) => ({ ...state }));

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [postcategories, setPostCategories] = useState([]);
  const [postcategory, setPostCategory] = useState("");
  const [tags, setTags] = useState([]);
  // step 1
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    loadPostCategories();
    loadTags();
  }, []);

  const loadPostCategories = () =>
    getPostCategories().then((c) => setPostCategories(c.data));

  const loadTags = () => getTags().then((s) => setTags(s.data));

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    setLoading(true);
    createTag({ name, parent: postcategory }, user.token)
      .then((res) => {
        // console.log(res)
        setLoading(false);
        setName("");
        toast.success(`"${res.data.name}" is created`);
        loadTags();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        if (err.response.status === 400) toast.error(err.response.data);
      });
  };

  const handleRemove = async (slug) => {
    // let answer = window.confirm("Delete?");
    // console.log(answer, slug);
    if (window.confirm("Delete?")) {
      setLoading(true);
      removeTag(slug, user.token)
        .then((res) => {
          setLoading(false);
          toast.error(`${res.data.name} deleted`);
          loadTags();
        })
        .catch((err) => {
          if (err.response.status === 400) {
            setLoading(false);
            toast.error(err.response.data);
          }
        });
    }
  };

  // step 4
  const searched = (keyword) => (c) => c.name.toLowerCase().includes(keyword);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col">
          {loading ? (
            <h4 className="text-danger">Loading..</h4>
          ) : (
            <h4>Create Tag category</h4>
          )}

          <div className="form-group">
            <label>Parent Post Category</label>
            <select
              name="postcategory"
              className="form-control"
              onChange={(e) => setPostCategory(e.target.value)}
            >
              <option>Please select</option>
              {postcategories.length > 0 &&
                postcategories.map((c) => (
                  <option key={c._id} value={c._id}>
                    {c.name}
                  </option>
                ))}
            </select>
          </div>

          <PostCategoryForm
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
          />

          {/* step 2 and step 3 */}
          <LocalSearch keyword={keyword} setKeyword={setKeyword} />

          {/* step 5 */}
          {tags.filter(searched(keyword)).map((s) => (
            <div className="alert alert-secondary" key={s._id}>
              {s.name}
              <span
                onClick={() => handleRemove(s.slug)}
                className="btn btn-sm float-right"
              >
                <DeleteOutlined className="text-danger" />
              </span>
              <Link to={`/admin/tag/${s.slug}`}>
                <span className="btn btn-sm float-right">
                  <EditOutlined className="text-warning" />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TagCreate;
