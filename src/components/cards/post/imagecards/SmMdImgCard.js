import React from "react";
import { Card } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import laptop from "../../../../images/laptop.png";
import { Link } from "react-router-dom";
import { showAverage } from "../../../../functions/rating";
import renderHTML from "react-render-html";

//const { Meta } = Card;

const SmMdImgCard = ({ post }) => {
  // destructure
  const { images, title, description, slug } = post;
  return (
    
       <div className="card mb-3" style={{marginLeft:"19px", minWidth:"220px", maxWidth:"220px", 
       minHeight:"210px", maxHeight:"210px"}}>
            <img className="img-fluid"  
            style={{minWidth:"220px", maxWidth:"220px", height:"100px"}}      
            src={images && images.length ? images[0].url : laptop} />

        <div className="card-body position-relative" style={{transform:"translateY(-45px)"}}>
            <h6 className="card-title text-white" style={{fontSize:"13px", fontWeight:"bold"}}>Card title</h6>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>  
        </div>
 
  );
};

export default SmMdImgCard;
