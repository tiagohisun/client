import React from "react";
import { Card } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import laptop from "../../../../images/laptop.png";
import { Link } from "react-router-dom";
import { showAverage } from "../../../../functions/rating";
import renderHTML from "react-render-html";

//const { Meta } = Card;

const SmLgImgCard = ({ post }) => {
  // destructure
  const { images, title, description, slug } = post;
  return (
    
       <div className="card mb-3" style={{minWidth:"350px", maxWidth:"350px", 
       minHeight:"220px", maxHeight:"220px"}}>
            <img className="img-fluid"  
            style={{minWidth:"220px", maxWidth:"220px", height:"150px"}}      
            src={images && images.length ? images[0].url : laptop} />

        <div className="card-body position-relative" style={{transform:"translateY(-130px)"}}>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>  
        </div>
 
  );
};

export default SmLgImgCard;
