import React from "react";
import { Card } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import laptop from "../../../../images/laptop.png";
import { Link } from "react-router-dom";
import { showAverage } from "../../../../functions/rating";
import renderHTML from "react-render-html";

//const { Meta } = Card;

const MdImgCard = ({ post }) => {
  // destructure
  const { images, title, description, slug } = post;
  return (
    
    <div className="card mb-3" style={{minWidth:"560px", maxWidth:"560px", 
       minHeight:"190px", maxHeight:"190px"}}>
       
        <img className="img-fluid"  
        style={{minWidth:"556px", maxWidth:"556px", height:"170px"}}      
        src={images && images.length ? images[0].url : laptop} />
        
        <div className="card-body position-relative" style={{transform:"translateY(-130px)"}}>
            <h6 className="card-text text-white">Category</h6>
            <h5 className="card-text text-white lead">This is a wider card with supporting text</h5>
            <p className="card-text text-white"><small className="text-white">Last updated 3 mins ago</small></p>
        </div>  
      </div>
  );
};

export default MdImgCard;
