import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";
import {useTranslation} from 'react-i18next'
import './styles.css'
const Search = () => {
  const {t, i18n} = useTranslation();
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
    <div className="form-group my-2 my-lg-0 mr-5" >
      <input 
        onChange={handleChange}
        type="search"
        value={text}
        className="sb mr-sm-2"
        placeholder={t("SC")}
      />
      <SearchOutlined className="search-icon-btn" style={{ cursor: "pointer" }} />
    </div>
  );
};

export default Search;
