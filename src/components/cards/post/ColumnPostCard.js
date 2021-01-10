import React from "react";
import { Card } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import laptop from "../../../images/laptop.png";
import { Link } from "react-router-dom";
import { showAverage } from "../../../functions/rating";
import renderHTML from 'react-render-html';

const { Meta } = Card;

const ColumnPostCard = ({ post }) => {
  // destructure
  const { images, title, description, slug } = post;
  return (
  <div className="card" style={{height:"150px", width: "300px", right: "13px", top:"2px", marginBottom:"5px",
  transform:"translateY(-95px)"}}>
     
  <img className="card-img-top" src={images && images.length ? images[0].url : laptop}
      style={{minHeight: "150px", maxHeight: "200px", minWidth: "300px", maxWidth:"300px"}} />

  <div className="card-body" style={{width:"300px"}}>
    
    <Link to={`/post/${slug}`} >
  <p className="card-text font-weight-bold text-white" 
  style={{padding:"10px", backgroundColor: "rgba(0, 0, 52, 0.6)", 
  position: "absolute", bottom:"60px", right:"250px"}} > 
  {title}</p>
    </Link>
        
    <p className="card-text" style={{position: "absolute", bottom:"10px", color: "white"}}>{renderHTML(`${(description.substring(0, 70))}...`)}</p>
  </div>

    </div>
  );
};

export default ColumnPostCard;
