import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { getPostCategories } from "../../../functions/postcategory";
import { updateTag, getTag } from "../../../functions/posttag";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import PostCategoryForm from "../../../components/forms/blog/PostCategoryForm";
import LocalSearch from "../../../components/forms/LocalSearch";

const TagUpdate = ({ match, history }) => {
  const { user } = useSelector((state) => ({ ...state }));

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [postcategories, setPostCategories] = useState([]);
  const [parent, setParent] = useState("");

  useEffect(() => {
    loadPostCategories();
    loadTag();
  }, []);

  const loadPostCategories = () =>
    getPostCategories().then((c) => setPostCategories(c.data));

  const loadTag = () =>
    getTag(match.params.slug).then((s) => {
      setName(s.data.name);
      setParent(s.data.parent);
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    setLoading(true);
    updateTag(match.params.slug, { name, parent }, user.token)
      .then((res) => {
        // console.log(res)
        setLoading(false);
        setName("");
        toast.success(`"${res.data.name}" is updated`);
        history.push("/admin/tag");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        if (err.response.status === 400) toast.error(err.response.data);
      });
  };

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
            <h4>Update tag category</h4>
          )}

          <div className="form-group">
            <label>Parent category</label>
            <select
              name="postcategory"
              className="form-control"
              onChange={(e) => setParent(e.target.value)}
            >
              <option>Please select</option>
              {postcategories.length > 0 &&
                postcategories.map((c) => (
                  <option key={c._id} value={c._id} selected={c._id === parent}>
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
        </div>
      </div>
    </div>
  );
};

export default TagUpdate;
