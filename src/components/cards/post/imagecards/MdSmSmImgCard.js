import React from "react";
import { Card } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import laptop from "../../../../images/laptop.png";
import { Link } from "react-router-dom";
import { showAverage } from "../../../../functions/rating";
import renderHTML from "react-render-html";

//const { Meta } = Card;

const MdSmSmImgCard = ({ post }) => {
  // destructure
  const { images, title, description, slug } = post;
  return (
        <div className="card mb-3 ml-4" style={{minWidth:"250px", maxWidth:"250px", height:"215px"}}>
            <img className="img-fluid"  
            style={{minWidth:"250px", maxWidth:"250px", height:"130px"}}      
            src={images && images.length ? images[0].url : laptop} />

        <div className="card-body" style={{transform:"translateY(-25px)"}}>
            <h6 className="mt-1">Card title</h6>
            <p className="card-text" style={{transform:"translateY(-5px)"}}>This is a wider card with supporting text...</p>
            <p className="card-text" style={{transform:"translateY(-9px)"}}><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>  
        </div>
        
  );
};

export default MdSmSmImgCard;
