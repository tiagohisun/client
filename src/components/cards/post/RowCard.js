import React from "react";

import laptop from "../../../images/laptop.png";
import { Link } from "react-router-dom";
import renderHTML from "react-render-html";
const RowCard = ({ post, img_width, fontsized, fontsizet }) => {
  const { images, title, description, slug } = post;
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "6px",
        marginBottom: "11px",
      }}
    >
      <div
        className="img-section d-inline-block"
        style={{ maxWidth: img_width }}
      >
        <img
          className="card-img img-fluid"
          src={images && images.length ? images[0].url : laptop}
          style={
            {
              // minHeight: "67px",
              // maxHeight: "67px",
              // minWidth: "100px",
              // maxWidth: "100px",
              //   marginTop: "4px",
              //   marginLeft: "2px",
            }
          }
        />
      </div>
      <div className="title-section d-inline-block pt-2 pl-3" style={{}}>
        <Link to={`/post/${slug}`}>
          <span
            style={{
              color: "#000034",
              fontSize: `${fontsizet}px`,
            }}
          >
            {title}
          </span>
        </Link>
        <br />
        <span
          style={{
            color: "#000034",
            fontSize: `${fontsized}px`,
            fontWeight: "bold",
          }}
        >
          {renderHTML(`${description.substring(0, 70)}`)}
        </span>
      </div>
    </div>
  );
};

export default RowCard;
