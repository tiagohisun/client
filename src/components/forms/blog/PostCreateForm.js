import React from "react";
import { Select } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { QuillModules, QuillFormats } from "../../helpers/quill";
import renderHTML from "react-render-html";

const { Option } = Select;

const PostCreateForm = ({
  handleSubmit,
  handleChange,
  setValues,
  values,
  handlePostCatagoryChange,
  tagOptions,
  showTag,
  handleBody,
  body,
}) => {
  // destructure
  const { title, postcategories, postcategory, tags, images } = values;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={title}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <ReactQuill
          type="text"
          name="description"
          className="form-control"
          value={body}
          onChange={handleBody}
          theme="snow"
          modules={QuillModules}
          formats={QuillFormats}
        />
      </div>
      <div className="form-group">
        <label>Post Category</label>
        <select
          name="postcategory"
          className="form-control"
          onChange={handlePostCatagoryChange}
        >
          <option>Please select</option>
          {postcategories.length &&
            postcategories.map((pc) => (
              <option key={pc._id} value={pc._id}>
                {pc.name}
              </option>
            ))}
        </select>
      </div>

      {showTag && (
        <div>
          <label>Sub Categories</label>
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Please select"
            value={tags}
            onChange={(value) => setValues({ ...values, tags: value })}
          >
            {tagOptions.length &&
              tagOptions.map((t) => (
                <Option key={t._id} value={t._id}>
                  {t.name}
                </Option>
              ))}
          </Select>
        </div>
      )}

      <br />
      <button className="btn btn-outline-info">Save</button>
    </form>
  );
};

export default PostCreateForm;
