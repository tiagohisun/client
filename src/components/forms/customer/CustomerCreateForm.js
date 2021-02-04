

import React from "react";
import { Select } from "antd";

const { Option } = Select;

const CustomerCreateForm = ({
  handleSubmit,
  handleChange,
  setValues,
  values,
  handleCatagoryChange,
  subOptions,
  showSub,
}) => {
  // destructure
  const { custfname, custcategories, custcategory, custemail, custcity, 
  custcities, custcountry, custcountries, custstate, custstates, custphone,
  custnotes, custinterestedin, custinterestedins, tags, images } = values;

  return (
    <form onSubmit={handleSubmit} className="pt-3">

     <div className="form-group">
        <label>Customer Category</label>
        <select name="custcategory" className="form-control" onChange={handleChange}>
          <option>Please select</option>
          {custcategories.map((cc) => (
            <option key={cc} value={cc}>
              {cc}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Customer Full Name</label>
        <input
          type="text"
          name="custfname"
          className="form-control"
          value={custfname}
          onChange={handleChange}
        />
      </div>   

<div className="form-group">
        <label>City</label>
        <select name="custcategory" className="form-control" onChange={handleChange}>
          <option>Please select</option>
          {custcities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        </div>

        <div className="form-group">
        <label>State</label>
        <select name="custstate" className="form-control" onChange={handleChange}>
          <option>Please select</option>
          {custstates.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        </div>

        <div className="form-group">
        <label>Country</label>
        <select name="custcountry" className="form-control" onChange={handleChange}>
          <option>Please select</option>
          {custcountries.map((ct) => (
            <option key={ct} value={ct}>
              {ct}
            </option>
          ))}
        </select>
        </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="text"
          name="custphone"
          className="form-control"
          value={custemail}
          onChange={handleChange}
        />
      </div>   

      <div className="form-group">
        <label>Phone</label>
        <input
          type="text"
          name="custphone"
          className="form-control"
          value={custphone}
          onChange={handleChange}
        />
      </div>   

      <div className="form-group">
        <label>Insterested In</label>
        <select name="custinterestedin" className="form-control" onChange={handleChange}>
          <option>Please select</option>
          {custinterestedins.map((ii) => (
            <option key={ii} value={ii}>
              {ii}
            </option>
          ))}
        </select>
        </div>

     <div className="form-group">
        <label>Notes</label>
        <input
          type="text"
          name="custnotes"
          className="form-control"
          value={custnotes}
          onChange={handleChange}
        />
      </div>
      <br />
      <button className="btn btn-outline-info">Save</button>
    </form>
  );
};

export default CustomerCreateForm;
