import React from "react";
import { Select } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { QuillModules, QuillFormats } from "../../helpers/quill";
import renderHTML from "react-render-html";

const { Option } = Select;

const PostUpdateForm = ({
  handleSubmit,
  handleChange,
  setValues,
  values,
  handlePostCategoryChange,
  postcategories,
  tagOptions,
  arrayOfTags,
  setArrayOfTags,
  selectedPostCategory,
  handleBody,
  setBody,
  body,
}) => {
  // destructure
  const { title, postcategory, tags, images, description } = values;

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
        <label>Body</label>
        {/* <ReactQuill
          type="text"
          name="body"
          className="form-control"
          value={body}
          onChange={handleBody}
          theme="snow"
          modules={QuillModules}
          formats={QuillFormats}
        /> */}
        <ReactQuill
          type="text"
          name="description"
          className="form-control"
          value={body}
          onChange={setBody}
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
          onChange={handlePostCategoryChange}
          value={selectedPostCategory ? selectedPostCategory : postcategory._id}
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

      {/* <div>
        <label>Sub Categories</label>
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="Please select"
          value={arrayOfSubs}
          onChange={(value) => setArrayOfSubs(value)}
        >
          {subOptions.length &&
            subOptions.map((s) => (
              <Option key={s._id} value={s._id}>
                {s.name}
              </Option>
            ))}
        </Select>
            </div>*/}

      <br />
      <button className="btn btn-outline-info">Save</button>
    </form>
  );
};

export default PostUpdateForm;
