import React from "react";
import { Link } from "react-router-dom";

const ProductListItems = ({ product }) => {
  const {
    price,
    year,
    location,
    category,
    subs,
    availability,
    model,
    brand,
    quantity,
    } = product;

  return (
    <ul className="list-group">
      <li className="list-group-item">
        Price{" "}
        <span className="label label-default label-pill pull-xs-right">
          R$ {price}
        </span>
      </li>

      <li className="list-group-item">
        Year{" "}
        <span className="label label-default label-pill pull-xs-right">
           {year}
        </span>
      </li>

      <li className="list-group-item">
        Location{" "}
        <span className="label label-default label-pill pull-xs-right">
          {location}
        </span>
      </li>

      {category && (
        <li className="list-group-item">
          Category{" "}
          <Link
            to={`/category/${category.slug}`}
            className="label label-default label-pill pull-xs-right"
          >
            {category.name}
          </Link>
        </li>
      )}

      <li className="list-group-item">
        Brand{" "}
        <span className="label label-default label-pill pull-xs-right">
          {brand}
        </span>
      </li>

      <li className="list-group-item">
        Availability{" "}
        <span className="label label-default label-pill pull-xs-right">
          {availability}
        </span>
      </li>
    </ul>
  );
};

export default ProductListItems;
