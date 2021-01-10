import React from "react";
import { Card } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import laptop from "../../../images/laptop.png";
import { Link } from "react-router-dom";
import { showAverage } from "../../../functions/rating";
import renderHTML from 'react-render-html';

const { Meta } = Card;

const LinePostCard = ({ post }) => {
  // destructure
  const { images, title, description, slug } = post;
  return (
  <div className="card" style={{position: "relative", height:"150px", width: "606px", left: "284px", top:"2px", marginBottom:"5px"}}>
     
  <img className="card-img" src={images && images.length ? images[0].url : laptop}
      style={{minHeight: "100px", maxHeight: "150px", minWidth: "150px", 
      maxWidth:"200px", marginTop:"22px", marginLeft:"22px"}} />

  <div className="card-body" style={{width:"600px"}}>
    
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

export default LinePostCard;
