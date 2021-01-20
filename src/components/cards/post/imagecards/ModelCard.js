import React from "react";
import { Card } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import laptop from "../../../../images/laptop.png";
import { Link } from "react-router-dom";
import { showAverage } from "../../../../functions/rating";
import renderHTML from "react-render-html";

//const { Meta } = Card;

const ModelCard = ({ post }) => {
  // destructure
  const { images, title, description, slug } = post;
  return (
    
        <img className="img-fluid"  
             
        src={images && images.length ? images[0].url : laptop} />
 
  );
};

export default ModelCard;
