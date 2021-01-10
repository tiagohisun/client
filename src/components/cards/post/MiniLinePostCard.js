import React from "react";
import { Card } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import laptop from "../../../images/laptop.png";
import { Link } from "react-router-dom";
import { showAverage } from "../../../functions/rating";
import renderHTML from 'react-render-html';

const { Meta } = Card;

const MiniLinePostCard = ({ post }) => {
  // destructure
  const { images, title, description, slug } = post;
  return (
  <div className="card" style={{position: "relative", minHeight:"75px",
  maxHeight:"75px", width: "298px", 
  transform:"translateY(14px)", left: "600px", top:"2px", bottom:"100px", 
  marginBottom:"5px"}}>
     
  <img className="card-img" src={images && images.length ? images[0].url : laptop}
      style={{minHeight: "67px", maxHeight: "67px", minWidth: "100px", 
      maxWidth:"100px", marginTop:"4px", marginLeft:"2px"}} />

  <div className="card-body" style={{width:"600px"}}>
    
    <Link to={`/post/${slug}`} >
  <p className="card-text font-weight-bold text-white" 
  style={{padding:"10px", backgroundColor: "rgba(0, 0, 52, 0.6)", 
  position: "absolute", bottom:"60px", right:"0px"}} > 
  {title}</p>
    </Link>
        
    <p className="card-text" style={{position: "absolute", bottom:"10px", color: "white"}}>{renderHTML(`${(description.substring(0, 70))}...`)}</p>
  </div>

    </div>
  );
};

export default MiniLinePostCard;
