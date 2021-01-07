import React, { useState, useEffect } from "react";
import { getPostsByCount, fetchPostsByFilter } from "../functions/post";
import { getCategories } from "../functions/category";
import { getTags } from "../functions/posttag";
import { useSelector, useDispatch } from "react-redux";
import PostCard from "../components/cards/PostCard";
import { Menu, Slider, Checkbox, Card } from "antd";
import {
  DollarOutlined,
  DownSquareOutlined,
  StarOutlined,
} from "@ant-design/icons";
import Star from "../components/forms/Star";

const { SubMenu, ItemGroup } = Menu;

const Shop = () => {
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


  //latestpost.push(posts[0]);
  for (let i = 0; i < posts.length; i++) {
    const element = posts[i];
    if (i === posts.length - 1) {
      latestpost.push(posts[i]);
    }
    //console.log(element.postcategory.name === "Dental News");
    if (element.postcategory.name === "Dental News" && i !== posts.length - 1) {
      // console.log(i, ":", element.postcategory.name);
      categoreypost.push(posts[i]);
    }
  }

  let newcategoreypost = categoreypost.slice(1, 2);
  let latestdentail = categoreypost.slice(-1);


  console.log(categoreypost);
  //console.log(latestpost);

  return (
    <div className="container-fluid">
      <div className="col-md-9 pt-2">
        {loading ? (
          <h4 className="text-danger">Loading...</h4>
        ) : (
          <h4 className="text-danger">Posts</h4>
        )}

        {posts.length < 1 && <p>No posts found</p>}

        <div>
        <div class="container"> 
        <div class="row text-center">
        <div class="col-xs-6 col-sm-4 block1"><h2>{newcategoreypost.map((p) => (
            <div key={p._id} className="col width=90px">
              <PostCard post={p} />
            </div>
          ))}</h2></div>
        <div class="col-xs-6 col-sm-4 block2"><h2>{latestdentail.map((p) => (
            <div key={p._id} className="col width=90px">
              <PostCard style={{width: "80px"}} post={p} />
            </div>
          ))}</h2></div>
        <div class="col-xs-6 col-sm-4 block3"><h2>
        Column 3
        
        </h2></div>
        </div>

        </div> 
      </div>
        </div>
      </div>
   
  );
};

export default Shop;
