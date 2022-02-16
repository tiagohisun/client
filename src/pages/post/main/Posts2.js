import React, { useState, useEffect, Component } from "react";
import Slider from "react-slick";
import { getPostsByCount, fetchPostsByFilter } from "../functions/post";
import { getCategories } from "../functions/category";
import { getTags } from "../functions/posttag";
// import Search from "../components/forms/Search";
import { useSelector, useDispatch } from "react-redux";
import ColumnPostCard from "../components/cards/post/ColumnPostCard";
import HeadPostCard from "../components/cards/post/HeadPostCard";
import LgImgCard from "../components/cards/post/imagecards/LgImgCard";
import MdImgCard from "../components/cards/post/imagecards/MdImgCard";
import ModelCard from "../components/cards/post/imagecards/MdImgCard";
import SmImgCard from "../components/cards/post/imagecards/SmImgCard";
import MdSmImgCard from "../components/cards/post/imagecards/MdSmImgCard";
import SmSmImgCard from "../components/cards/post/imagecards/SmSmImgCard";
import MdSmSmImgCard from "../components/cards/post/imagecards/MdSmSmImgCard";
import SmMdImgCard from "../components/cards/post/imagecards/SmMdImgCard";
import SmLgImgCard from "../components/cards/post/imagecards/SmLgImgCard";
import SmSmSmImgCard from "../components/cards/post/imagecards/SmSmSmImgCard";
import TextPostCard from "../components/cards/post/TextPostCard";
import LinePostCard from "../components/cards/post/LinePostCard";
import RowCard from "../components/cards/post/RowCard";
import MiniLinePostCard from "../components/cards/post/MiniLinePostCard";
import MiniTextPostCard from "../components/cards/post/MiniTextPostCard";
import { Menu, Checkbox, Card } from "antd";
import {
  DollarOutlined,
  DownSquareOutlined,
  StarOutlined,
} from "@ant-design/icons";
import Laptop from "../images/laptop.png";
import image from "../static/images/boxes/classifieds.jpg";
import { FiMessageCircle } from "react-icons/fi";
import { WiTime1 } from "react-icons/wi";
import { FiEdit } from "react-icons/fi";
import { FaGreaterThan } from "react-icons/fa";
import Star from "../components/forms/Star";

const { SubMenu, ItemGroup } = Menu;

const Post = ({ post }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState([0, 0]);
  const [ok, setOk] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryIds, setCategoryIds] = useState([]);
  const [star, setStar] = useState("");
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("");

  let dispatch = useDispatch();
  let { search } = useSelector((state) => ({ ...state }));
  const { text } = search;
  useEffect(() => {
    getPostsByCount(20).then((p) => {
      console.log(p.data);
      setPosts(p.data);
    });
  }, []);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let categoreypost = [];
  let latestpost = [];
  let educategorypostdesc = [];
  let techcategorypostdesc = [];

  //latestpost.push(posts[0]);
  for (let i = 0; i < posts.length; i++) {
    const element = posts[i];
    if (i === posts.length - 1) {
      latestpost.push(posts[i]);
    }
    //console.log(element.postcategory.name === "Dental News");
    if (element.postcategory.name === "Dental News") {
      // console.log(i, ":", element.postcategory.name);
      categoreypost.push(posts[i]);
    }
    if (element.postcategory.name === "Education") {
      educategorypostdesc.push(posts[i]);
    }
    if (element.postcategory.name === "Technology") {
      techcategorypostdesc.push(posts[i]);
    }
  }
  console.log("categorypost", categoreypost);
  let newcategoreypost = categoreypost.slice(1, 2);

  let latestdentail = categoreypost.slice(-1);
  let latesteduc = educategorypostdesc.slice(-1);
  let latesttech = techcategorypostdesc.slice(-1);
  let allblglatest = [...latestdentail, ...latesteduc, ...latesttech];

  let second_latest_o = [...categoreypost.slice(-2, -1)];
  let second_latest_t = [...educategorypostdesc.slice(-2, -1)];
  let second_latest_th = [...techcategorypostdesc.slice(-2, -1)];

  let third_latest_o = [...categoreypost.slice(-3, -2)];
  let third_latest_t = [...educategorypostdesc.slice(-3, -2)];
  let third_latest_th = [...techcategorypostdesc.slice(-3, -2)];

  let four_five_six_edulatest = [
    ...educategorypostdesc.slice(-3, -2),
    ...educategorypostdesc.slice(-2, -1),
    ...educategorypostdesc.slice(-1),
  ];
  let four_five_six_dentlatest = [
    ...categoreypost.slice(-3, -2),
    //...categoreypost.slice(-2, -1),
    // ...categoreypost.slice(-1),
  ];

  //console.log(four_five_six_dentlatest);

  const digituniq = [...new Set(post)]
    .filter((item) => item.postcategory === "Dental News")
    .slice(0, 8);

  return (
    <React.Fragment>
      <div
        className="container mt-2 mb-3 fluid bg-info"
        style={{ height: "150px" }}
      />
      <ul
        className="nav position-relative bg-dark"
        style={{
          fontSize: "12px",
          height: "35px",
          marginLeft: "178px",
          width: "999px",
        }}
      >
        <li className="nav-item" style={{ borderRight: "1px solid #ccc" }}>
          <a className="nav-link" href="#">
            Main
          </a>
        </li>
        <li className="nav-item" style={{ borderRight: "1px solid #ccc" }}>
          <a className="nav-link" href="/posts/category/dental-news">
            Dental News
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            style={{ borderRight: "1px solid #ccc" }}
            href="/posts/category/technology"
          >
            Technology
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            style={{ borderRight: "1px solid #ccc" }}
            href="/posts/category/education"
          >
            Education
          </a>
        </li>
      </ul>

      <div className="container col-9 mt-4 " style={{ maxHeight: "348px" }}>
        <div className="row">
          <div className="col-5 " style={{ maxHeight: "348px" }}></div>
          <div
            className="col-7 "
            style={{ maxWidth: "700px", height: "346px" }}
          >
            <div className="row" style={{ height: "170px" }}>
              <h2>
                {latestdentail
                  .slice(-3)
                  .reverse()
                  .map((p) => (
                    <div
                      key={p._id}
                      className="col-5 position-relative"
                      style={{ transform: "translateX(-12px)" }}
                    >
                      <MdImgCard post={p} />
                    </div>
                  ))}
              </h2>
            </div>
            <div className="row">
              <div className="col mt-1">
                <h2>
                  {latestdentail
                    .slice(-3)
                    .reverse()
                    .map((p) => (
                      <div
                        key={p._id}
                        className="col position-relative"
                        style={{
                          transform: "translateX(-28px)",
                          height: "140px",
                        }}
                      >
                        <SmImgCard post={p} />
                      </div>
                    ))}
                </h2>
              </div>
              <div
                className="col mt-1"
                style={{ height: "140px", width: "278px" }}
              >
                <h2>
                  {latestdentail
                    .slice(-3)
                    .reverse()
                    .map((p) => (
                      <div
                        key={p._id}
                        className="col  ml-1 position-relative"
                        style={{ transform: "translateX(-84px)" }}
                      >
                        <SmImgCard post={p} />
                      </div>
                    ))}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" border mt-4" />
      <div className="container col-9  mt-3" style={{ height: "410px" }}>
        <div className="row " style={{ height: "410px" }}>
          <div className="col-4 " style={{ height: "410px" }}>
            <h2>
              {latestdentail
                .slice(-3)
                .reverse()
                .map((p) => (
                  <div
                    key={p._id}
                    className="col position-relative"
                    style={{ transform: "translateX(-34px)" }}
                  >
                    <MdSmImgCard post={p} />
                  </div>
                ))}
            </h2>
          </div>
          <div className="col-5">
            <div className="row" style={{ margin: "0px" }}>
              <h2>
                {latestdentail
                  .slice(-3)
                  .reverse()
                  .map((p) => (
                    <div
                      key={p._id}
                      className="col position-relative"
                      style={{ transform: "translate(-23px, 5px)" }}
                    >
                      <SmSmImgCard post={p} />
                    </div>
                  ))}
              </h2>
            </div>
            <div className="row" style={{ margin: "0px" }}>
              <h2>
                {latestdentail
                  .slice(-3)
                  .reverse()
                  .map((p) => (
                    <div
                      key={p._id}
                      className="col position-relative"
                      style={{ transform: "translate(-23px, -1px)" }}
                    >
                      <SmSmImgCard post={p} />
                    </div>
                  ))}
              </h2>
            </div>

            <div className="row" style={{ margin: "0px" }}>
              <h2>
                {latestdentail
                  .slice(-3)
                  .reverse()
                  .map((p) => (
                    <div
                      key={p._id}
                      className="col position-relative"
                      style={{ transform: "translate(-23px, -8px)" }}
                    >
                      <SmSmImgCard post={p} />
                    </div>
                  ))}
              </h2>
            </div>

            <div className="row" style={{ margin: "0px" }}>
              <h2>
                {latestdentail
                  .slice(-3)
                  .reverse()
                  .map((p) => (
                    <div
                      key={p._id}
                      className="col position-relative"
                      style={{ transform: "translate(-23px, -14px)" }}
                    >
                      <SmSmImgCard post={p} />
                    </div>
                  ))}
              </h2>
            </div>
          </div>
          <div className="col-3 ">
            <span className="">
              <div className="span">facebook icon</div>

              <img
                className="mr-5"
                style={{
                  width: "220px",
                  height: "220px",
                  paddingBottom: "20px",
                }}
                src={image}
              />
            </span>

            <h2>
              {latestdentail
                .slice(-3)
                .reverse()
                .map((p) => (
                  <div
                    key={p._id}
                    className="col position-relative ml-1"
                    style={{ transform: "translate(-23px, 5px)" }}
                  >
                    <SmSmSmImgCard post={p} />
                  </div>
                ))}
            </h2>
          </div>
        </div>
      </div>
      <div className=" border mt-4" />
      <div className="container col-10  mt-4" style={{ height: "220px" }}>
        <div className="row">
          <div className="col " style={{ height: "216px" }}>
            <div className="col">
              <h2>
                {latestdentail
                  .slice(-3)
                  .reverse()
                  .map((p) => (
                    <div
                      key={p._id}
                      className="col position-relative"
                      style={{ transform: "translateX(-4px)" }}
                    >
                      <MdSmSmImgCard post={p} />
                    </div>
                  ))}
              </h2>
            </div>
            <div className="row " />
            <div className="row bg-light" />
          </div>
          <div className="col mr-4 " style={{ height: "216px" }}>
            <div className="col">
              <h2>
                {latestdentail
                  .slice(-3)
                  .reverse()
                  .map((p) => (
                    <div
                      key={p._id}
                      className="col position-relative"
                      style={{ transform: "translateX(-110px)" }}
                    >
                      <MdSmSmImgCard post={p} />
                    </div>
                  ))}
              </h2>
            </div>
          </div>

          <div className="col">
            <h2>
              {latestdentail
                .slice(-3)
                .reverse()
                .map((p) => (
                  <div
                    key={p._id}
                    className="col position-relative"
                    style={{ transform: "translateX(-225px)" }}
                  >
                    <MdSmSmImgCard post={p} />
                  </div>
                ))}
            </h2>
          </div>
          <div className="col" />
        </div>

        <div className="row" />
      </div>
    </React.Fragment>
  );
};

export default Post;
