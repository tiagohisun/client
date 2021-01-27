import React from "react";
import { Card } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import laptop from "../../../../images/laptop.png";
import { Link } from "react-router-dom";
import { showAverage } from "../../../../functions/rating";
import renderHTML from "react-render-html";

//const { Meta } = Card;

const SmSmSmImgCard = ({ post }) => {
  // destructure
  const { images, title, description, slug } = post;
  return (
    
       <div className="card m-0" style={{width:"220px", height:"90px"}}>
        <div className="row">
        <div className="col">
        <img className="img-fluid mt-1 ml-1"  
            style={{minWidth:"80px", maxWidth:"80px", minHeight:"80px", 
            maxHeight:"80px"}}      
            src={images && images.length ? images[0].url : laptop} />

        </div>
        <div className="col">
        <div className="card-body position-relative" 
            style={{transform:"translateY(-8px)"}}>

            <h5 className="h6 position-relative" 
            style={{transform:"translateX(-40px)", fontSize:"10px"}}>Card title</h5>
            <p className="card-text" style={{transform:"translateX(-40px)", 
            fontSize:"10px"}}>This is a wider</p>
            <p className="card-text" style={{transform:"translate(-40px, -8px)",
            fontSize:"10px"}}>
            <small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
        </div>
        </div>
  </div>
 
  );
};

export default SmSmSmImgCard;
