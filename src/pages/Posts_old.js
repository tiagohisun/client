import React, { useState, useEffect, Component } from "react";
import Slider from "react-slick";
import { getPostsByCount, fetchPostsByFilter } from "../functions/post";
import { getCategories } from "../functions/category";
import { getTags } from "../functions/posttag";
import { useSelector, useDispatch } from "react-redux";
import ColumnPostCard from "../components/cards/post/ColumnPostCard";
import HeadPostCard from "../components/cards/post/HeadPostCard";
import TextPostCard from "../components/cards/post/TextPostCard";
import LinePostCard from "../components/cards/post/LinePostCard";
import MiniLinePostCard from "../components/cards/post/MiniLinePostCard";
import MiniTextPostCard from "../components/cards/post/MiniTextPostCard";
import { Menu, Checkbox, Card } from "antd";
import {
  DollarOutlined,
  DownSquareOutlined,
  StarOutlined,
} from "@ant-design/icons";
import Laptop from "../images/laptop.png";
import { FiMessageCircle } from "react-icons/fi";
import { WiTime1 } from "react-icons/wi";
import {FiEdit} from "react-icons/fi"
import { FaGreaterThan } from "react-icons/fa"
import Star from "../components/forms/Star";

const { SubMenu, ItemGroup } = Menu;

const Post = ({post}) => {
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
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  useEffect(() => {
    loadAllPosts();
    // fetch categories
    getCategories().then((res) => setCategories(res.data));
    // fetch tagcategories
    getTags().then((res) => setTags(res.data));
  }, []);

  const fetchPosts = (arg) => {
    fetchPostsByFilter(arg).then((res) => {
      setPosts(res.data);
    });
  };

  // 1. load posts by default on page load
  const loadAllPosts = () => {
    getPostsByCount(12).then((p) => {
      setPosts(p.data);
      setLoading(false);
    });
  };

  // 2. load posts on user search input
  useEffect(() => {
    const delayed = setTimeout(() => {
      fetchPosts({ query: text });
    }, 300);
    return () => clearTimeout(delayed);
  }, [text]);

  // 3. load posts based on price range
  useEffect(() => {
    console.log("ok to request");
    fetchPosts({ price });
  }, [ok]);

  const handleSlider = (value) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });

    // reset
    setCategoryIds([]);
    setPrice(value);
    setStar("");
    setTag("");
    setTimeout(() => {
      setOk(!ok);
    }, 300);
  };

  // 4. load posts based on category
  // show categories in a list of checkbox
  const showCategories = () =>
    categories.map((c) => (
      <div key={c._id}>
        <Checkbox
          onChange={handleCheck}
          className="pb-2 pl-4 pr-4"
          value={c._id}
          name="category"
          checked={categoryIds.includes(c._id)}
        >
          {c.name}
        </Checkbox>
        <br />
      </div>
    ));

  // handle check for categories
  const handleCheck = (e) => {
    // reset
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setPrice([0, 0]);
    setStar("");
    setTag("");
    // console.log(e.target.value);
    let inTheState = [...categoryIds];
    let justChecked = e.target.value;
    let foundInTheState = inTheState.indexOf(justChecked); // index or -1

    // indexOf method ?? if not found returns -1 else return index [1,2,3,4,5]
    if (foundInTheState === -1) {
      inTheState.push(justChecked);
    } else {
      // if found pull out one item from index
      inTheState.splice(foundInTheState, 1);
    }

    setCategoryIds(inTheState);
    // console.log(inTheState);
    fetchPosts({ category: inTheState });
  };

  // 5. show posts by star rating
  const handleStarClick = (num) => {
    // console.log(num);
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setPrice([0, 0]);
    setCategoryIds([]);
    setStar(num);
    setTag("");
    fetchPosts({ stars: num });
  };

  const showStars = () => (
    <div className="pr-4 pl-4 pb-2">
      <Star starClick={handleStarClick} numberOfStars={5} />
      <Star starClick={handleStarClick} numberOfStars={4} />
      <Star starClick={handleStarClick} numberOfStars={3} />
      <Star starClick={handleStarClick} numberOfStars={2} />
      <Star starClick={handleStarClick} numberOfStars={1} />
    </div>
  );

  // 6. show posts by tag category
  const showTags = () =>
    tags.map((s) => (
      <div
        key={s._id}
        onClick={() => handleTag(s)}
        className="p-1 m-1 badge badge-secondary"
        style={{ cursor: "pointer" }}
      >
        {s.name}
      </div>
    ));

  const handleTag = (tag) => {
    // console.log("SUB", tag);
    setTag(tag);
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setPrice([0, 0]);
    setCategoryIds([]);
    setStar("");
    fetchPosts({ tag });
  };
  let categoreypost = [];
  let latestpost = [];
  let educategorypostdesc = [];
  let techcategorypostdesc  = [];

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
    else if (element.postcategory.name === "Education") {
      educategorypostdesc.push(posts[i]);

} else if (element.postcategory.name === "Technology") { 
      techcategorypostdesc.push(posts[i]);
  
}
  }

  let newcategoreypost = categoreypost.slice(1, 2);
  let latestdentail = categoreypost.slice(-1);
  
  console.log(categoreypost);
  //console.log(latestpost);

  const digituniq = [...new Set(post)]
    .filter((item) => item.postcategory === "Dental News")
    .slice(0, 8);


  return (
    <div className="container-col mt-5 ml-5" style={{width:"1200px", height:"1500px", backgroundColor:"white"}}>
        <div className="row">
        <div className="container-row" style={{position:"relative", width:"300px", height: "300px", left:"17px"}}>
        <h2>{categoreypost.slice(-1).reverse().map((p) => (
            <div key={p._id} className="col">
                <HeadPostCard post={p} />
            </div>
        ))}</h2>
        </div>
        <div className="container-row" style={{position:"relative", width:"300px", height: "400px", left:"23px"}}>
        <h2>{categoreypost.slice(-1).reverse().map((p) => (
            <div key={p._id} className="col">
                <HeadPostCard post={p} />
            </div>
        ))}</h2>
        </div>

        <div className="container-row" style={{position:"relative", width:"150px", 
        height: "400px", left:"180px"}}>
        <h2>{categoreypost.slice(-1).reverse().map((p) => (
            <div key={p._id} className="col">
                <HeadPostCard post={p} />
            </div>
        ))}</h2>
        </div>
        </div>
        <div className="container-row" style={{position:"absolute", width:"150px", 
        height: "400px", left:"355px"}}>
        <h2>{educategorypostdesc.slice(0,2).reverse().map((p) => (
            <div key={p._id} className="col">
                <TextPostCard post={p} />
            </div>
        ))}</h2>
        </div>
        <div className="container-row"style={{position:"absolute", width:"150px", 
        height: "400px", left:"662px",  transform:"translateY(-28px)"}}> >
        <h2>{educategorypostdesc.slice(0,2).reverse().map((p) => (
            <div key={p._id} className="col">
                < ColumnPostCard post={p} />
            </div>
        ))}</h2>
        </div>
        <div className="container-row" style={{position:"absolute", width:"150px", 
        height: "400px", top: "515px"}}>
        <h2>{educategorypostdesc.slice(0,2).reverse().map((p) => (
            <div key={p._id} className="col">
                < ColumnPostCard post={p} />
            </div>
        ))}</h2>
        </div>
        <hr />
        <div className="row">
        <div className="container-row" style={{position:"absolute", width:"150px", 
        height: "400px", right:"1359px", top: "746px"}}>
        <h2>{educategorypostdesc.slice(0,3).reverse().map((p) => (
            <div key={p._id} className="col">
                < LinePostCard post={p} />
            </div>
        ))}</h2>
        </div>
        <div className="container-row" style={{position:"relative", maxHeight:"100px",
         width:"200px", left:"17px" , top:"179px"}}>
        <h2>{categoreypost.slice(0,3).reverse().map((p) => (
            <div key={p._id} className="col">
                <MiniLinePostCard post={p} />
            </div>
        ))}</h2>
        </div>

        <div className="container-col" style={{position:"relative", 
         left:"17px", top:"249px"}}>
        <h2>{categoreypost.slice(0,2).reverse().map((p) => (
            <div key={p._id} className="col">
                <MiniTextPostCard post={p} />
            </div>
        ))}</h2>
        </div>
        
        <div className="container-col" style={{position:"relative", left:"413px", 
        bottom:"428px", backgroundColor:"blue", height: "1100px", width:"270px"}}>
        <h2>
            <div className="col">
                ADS
            </div>
        </h2>
        </div>
        </div>
        <div className="container bg-light" style={{backgroundColor:"orange", transform:"translateY(-390px"}}>
        <h2> Responsive </h2>
         <Slider {...settings}>
         {categoreypost.slice(0).reverse().map((p) => {
                return (
                      <div style={{padding:"30px"}} >
                        <div className="card" style={{padding:"30px",  width:"400px", height: "200px"}}>
                          <div className="card-img-overlay" style={{position:"absolute", transform:"translate(-30px, -20px)"}} >
                          <img className="p-1"  src={p.images && p.images.length ? p.images[0].url : Laptop}
                          style={{width:"300px", height: "200px", objectFit: "cover" }}
            
          />
                            <h5 style={{padding: "3px", borderRadius: "3px", display: "inline-block", backgroundSize:"auto", backgroundColor:"rgba(0, 0, 0, 0.3)", marginTop:"80%", color:"white", backgroundSize:"auto", backgroundColor:"rgba(0, 0, 0, 0.3)"}}>
                              {p.title}
                            </h5>
                             
                          </div>
                        </div>
                      </div>
                );
              })}
            </Slider>
      </div>
      </div>
  );
};

export default Post;
