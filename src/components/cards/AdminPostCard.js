import React from "react";
import { Card } from "antd";
import laptop from "../../images/laptop.png";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import renderHTML from 'react-render-html'

const { Meta } = Card;

const AdminPostCard = ({ post, handleRemove }) => {
  // destructure
  const { title, description, images, slug } = post;

  return (
    <Card
      cover={
        <img
          src={images && images.length ? images[0].url : laptop}
          style={{ height: "150px", objectFit: "cover" }}
          className="p-1"
        />
      }
      actions={[
        <Link to={`/admin/post/${slug}`}>
          <EditOutlined className="text-warning" />
        </Link>,
        <DeleteOutlined
          onClick={() => handleRemove(slug)}
          className="text-danger"
        />,
      ]}
    >
      <Meta
        
        title={<Link to={`/admin/post/${slug}`}>{post.title}</Link>}
        description={renderHTML(`${(description.substring(0, 40))}...`)}
      />
    </Card>
  );
};

export default AdminPostCard;
