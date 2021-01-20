import React from "react";
import { Card } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import laptop from "../../../../images/laptop.png";
import { Link } from "react-router-dom";
import { showAverage } from "../../../../functions/rating";
import renderHTML from "react-render-html";

//const { Meta } = Card;

const SmSmImgCard = ({ post }) => {
  // destructure
  const { images, title, description, slug } = post;
  return (
    
       <div className="card mb-3 ml-1" style={{width:"380px", height:"90px"}}>
        <div className="row">
        <div className="col">
        <img className="img-fluid"  
            style={{minWidth:"90px", maxWidth:"90px", minHeight:"90px", 
            maxHeight:"90px"}}      
            src={images && images.length ? images[0].url : laptop} />

        </div>
        <div className="col">
        <div className="card-body position-relative" 
            style={{transform:"translateY(-8px)"}}>

            <h5 className="h6 position-relative" 
            style={{transform:"translateX(-120px)"}}>Card title</h5>
            <p className="card-text" style={{transform:"translateX(-120px)"}}>This is a wider</p>
            <p className="card-text" style={{transform:"translate(-120px, -8px)"}}>
            <small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
        </div>
        </div>
  </div>
 
  );
};

export default SmSmImgCard;
