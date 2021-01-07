import React from "react";
import { Card } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import laptop from "../../images/laptop.png";
import { Link } from "react-router-dom";
import { showAverage } from "../../functions/rating";

const { Meta } = Card;

const PostCard = ({ post }) => {
  // destructure
  const { images, title, description, slug } = post;
  return (
    <>
      <Card
        cover={
          <img
            src={images && images.length ? images[0].url : laptop}
            style={{ height: "150px", objectFit: "cover" }}
            className="p-1"
          />
        }
        actions={[
          <Link to={`/post/${slug}`}>
            <EyeOutlined className="text-warning" /> <br /> View Product
          </Link>,
          <>
            <ShoppingCartOutlined className="text-danger" /> <br /> Contact
          </>,
        ]}
      >
        <Meta className="pb-1"
          title={`${title}`}
          
        />

      </Card>
    </>
  );
};

export default PostCard;
