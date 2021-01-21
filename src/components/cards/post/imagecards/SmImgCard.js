import React from "react";
import { Card } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import laptop from "../../../../images/laptop.png";
import { Link } from "react-router-dom";
import { showAverage } from "../../../../functions/rating";
import renderHTML from "react-render-html";

//const { Meta } = Card;

const SmImgCard = ({ post }) => {
  // destructure
  const { images, title, description, slug } = post;
  return (
        
      <div className="card mt-4" style={{minWidth:"275px", maxWidth:"275px", 
       minHeight:"132px", maxHeight:"132px"}}>

        <img className="img-fluid"  
        style={{minWidth:"278px", maxWidth:"145px", minHeight:"145px", 
        maxHeight:"135px"}}      
        src={images && images.length ? images[0].url : laptop} />

        <div className="card-body position-relative" style={{transform:"translateY(-100px)"}}>
            <h6 className="card-text text-white" style={{fontSize:"10px"}}>Category</h6>
            <h6 className="card-text text-white lead" style={{fontSize:"12px"}}>This is a wider card with supporting text</h6>
            <p className="card-text text-white"><small className="text-white">Last updated 3 mins ago</small></p>
        </div>  
      </div>
  );
};

export default SmImgCard;
