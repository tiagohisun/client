import React from "react";
import { Select } from "antd";

const { Option } = Select;

const ProductUpdateForm = ({
  handleSubmit,
  handleChange,
  setValues,
  values,
  handleCategoryChange,
  categories,
  subOptions,
  arrayOfSubs,
  setArrayOfSubs,
  selectedCategory,
}) => {
  // destructure
  const {
    title,
    description,
    price,
    year,
    location,
    category,
    subs,
    availability,
    quantity,
    images,
    models,
    brands,
    model,
    brand,
  } = values;

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
        <label>Model</label>
        <select
          value={model}
          name="model"
          className="form-control"
          onChange={handleChange}
        >
          {models.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Year</label>
        <input
          type="number"
          name="year"
          className="form-control"
          value={year}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Brand</label>
        <select
          value={brand}
          name="brand"
          className="form-control"
          onChange={handleChange}
        >
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Category</label>
        <select
          name="category"
          className="form-control"
          onChange={handleCategoryChange}
          value={selectedCategory ? selectedCategory : category._id}
        >
          {categories.length > 0 &&
            categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>


      <div className="form-group">
        <label>Location</label>
        <input
          type="location"
          name="location"
          className="form-control"
          value={location}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Availability</label>
        <select
          value={availability === "AVAILABLE" ? "AVAILABLE" : "SOLD"}
          name="availability"
          className="form-control"
          onChange={handleChange}
        >
          <option value="SOLD">SOLD</option>
          <option value="AVAILABLE">AVAILABLE</option>
        </select>
      </div>

      <div className="form-group">
        <label>Quantity</label>
        <input
          type="number"
          name="quantity"
          className="form-control"
          value={quantity}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          name="price"
          className="form-control"
          value={price}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          value={description}
          onChange={handleChange}
        />
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

export default ProductUpdateForm;
