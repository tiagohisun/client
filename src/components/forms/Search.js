import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";

const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => ({ ...state }));
  const { text } = search;

  const history = useHistory();

  const handleChange = (e) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: e.target.value },
    });
    
      history.push(`/shop?${text}`);
  
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   history.push(`/shop?${text}`);
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   history.push(`/posts?${text}`);
  // };

  return (
    <div className="form-inline my-2 my-lg-0" >
      <input
        onChange={handleChange}
        type="search"
        value={text}
        className="form-control mr-sm-2"
        placeholder="Search"
      />
      <SearchOutlined  style={{ cursor: "pointer" }} />
    </div>
  );
};

export default Search;
