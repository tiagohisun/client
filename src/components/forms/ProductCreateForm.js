import React from "react";
import { Select } from "antd";

const { Option } = Select;

const ProductCreateForm = ({
  handleSubmit,
  handleChange,
  setValues,
  values,
  handleCatagoryChange,
  subOptions,
  showSub,
}) => {
  // destructure
  const {
    title,
    description,
    year,
    location,
    price,
    categories,
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
    <form onSubmit={handleSubmit} className="pt-3">
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
      <br/>

      <div className="form-group pt-1">
        <label>Model</label>
        <select name="model" className="form-control" onChange={handleChange}>
          <option>Please select</option>
          {models.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>
     <br/>
      
      <div className="form-group pt-3">
        <label>Year</label>
        <input
          type="number"
          name="year"
          className="form-control"
          value={year}
          onChange={handleChange}
        />
      </div>
     <br/>
         
      <div className="form-group mt-2 pt-3">
        <label>Brand</label>
        <select name="brand" className="form-control" onChange={handleChange}>
          <option>Please select</option>
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>
     <br/>
    
      <div className="form-group mt-2 pt-3">
        <label>Category</label>
        <select
          name="category"
          className="form-control"
          onChange={handleCatagoryChange}
        >
          <option>Please select</option>
          {categories.length > 0 &&
            categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>
     <br/>
      
      <div className="form-group mt-2 pt-3">
        <label>Location</label>
        <input
          type="location"
          name="location"
          className="form-control"
          value={location}
          onChange={handleChange}
        />
      </div>
           <br/>
  
      <div className="form-group mt-2 pt-3">
        <label>Availability</label>
        <select
          name="availability"
          className="form-control"
          onChange={handleChange}
        >
          <option>Please select</option>
          <option value="SOLD">SOLD</option>
          <option value="AVAILABLE">AVAILABLE</option>
        </select>
      </div>
     <br/>
  
      <div className="form-group mt-2 pt-3">
        <label>Quantity</label>
        <input
          type="number"
          name="quantity"
          className="form-control"
          value={quantity}
          onChange={handleChange}
        />
      </div>
     <br/>
  
      <div className="form-group mt-2 pt-3">
        <label>Price</label>
        <input
          type="number"
          name="price"
          className="form-control"
          value={price}
          onChange={handleChange}
        />
      </div>
     <br/>
   
      <div className="form-group mt-2 pt-3">
        <label>Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          value={description}
          onChange={handleChange}
        />
      </div>

      {/*{showSub && (
        <div>
          <label>Sub Categories</label>
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Please select"
            value={subs}
            onChange={(value) => setValues({ ...values, subs: value })}
          >
            {subOptions.length &&
              subOptions.map((s) => (
                <Option key={s._id} value={s._id}>
                  {s.name}
                </Option>
              ))}
          </Select>
        </div>
              )}*/}

      <br />
      <button className="btn btn-outline-info mt-3">Save</button>
    </form>
  );
};

export default ProductCreateForm;
