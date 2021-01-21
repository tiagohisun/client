import React from "react";
import { Card } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import laptop from "../../../../images/laptop.png";
import { Link } from "react-router-dom";
import { showAverage } from "../../../../functions/rating";
import renderHTML from "react-render-html";

//const { Meta } = Card;

const MdSmImgCard = ({ post }) => {
  // destructure
  const { images, title, description, slug } = post;
  return (
      
        <div className="card ml-2 mb-1" style={{minWidth:"344px", maxWidth:"344px"}}>
            <img className="img-fluid"  
            style={{minWidth:"344px", maxWidth:"344px", minHeight:"250px", maxHeight:"250px"}}      
            src={images && images.length ? images[0].url : laptop} />

        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>  
        </div>
        
  );
};

export default MdSmImgCard;
