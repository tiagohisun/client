import React, { useState, useEffect } from "react";
import {
  getProductsByCount,
  fetchProductsByFilter,
} from "../functions/product";
import { getCategories } from "../functions/category";
import { getSubs } from "../functions/sub";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../components/cards/ProductCard";
import { Menu, Slider, Checkbox, Radio } from "antd";
import {
  DollarOutlined,
  DownSquareOutlined,
  StarOutlined,
} from "@ant-design/icons";
import Star from "../components/forms/Star";
import axios from "axios";
import {useTranslation} from 'react-i18next'

const { SubMenu, ItemGroup } = Menu;

const Shop = () => {
  const {t, i18n} = useTranslation();
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState([0, 0]);
  const [ok, setOk] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryIds, setCategoryIds] = useState("");
  const [star, setStar] = useState("");
  const [subs, setSubs] = useState([]);
  const [sub, setSub] = useState("");
  const [brands, setBrands] = useState([]);
  const [brand, setBrand] = useState("");
  const [shipping, setShipping] = useState("");
  
  let dispatch = useDispatch();
  let { search } = useSelector((state) => ({ ...state }));
  const { text } = search;
 
  useEffect(() => {
    loadAllProducts();
    // fetch categories
     getCategories().then((res) => setCategories(res.data));
    // fetch subcategories
    getSubs().then((res) => setSubs(res.data));
  }, []);
  
  const fetchProducts = (arg) => {
    fetchProductsByFilter(arg).then((res) => {
       setProducts(res.data);
    });
  };
  
  // 1. load products by default on page load
  const loadAllProducts = () => {
    getProductsByCount(12).then((p) => {
      let b  = p.data.map(b => b.brand) 
      setBrands([...new Set(b)])
      setProducts(p.data);
      //setCategories(p.data)
      setLoading(false);
    });
  };
  
  
  // 2. load products on user search input
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (text.length > 3) {
        axios.get(`${process.env.REACT_APP_API}/search/filters?query=${text}`)
        // .then((res) => res.json())
          .then((result) => {
            setProducts(result.data)
            console.log('Search Result', result.data)
          })
        .catch((err) => console.log(err));
      }
     
    }
    //mounted 
    return () => mounted = false;
    // const delayed = setTimeout(() => {
    //   fetchProducts();
    //   if (!text) { 
    //     loadAllProducts();
    //   }
    // }, 300);
    // return () => clearTimeout(delayed);
  }, [text]);

  // 3. load products based on price range
  // useEffect(() => {
  //   console.log("ok to request");
  //   fetchProducts({ price });
  // }, [ok]);

  const handleSlider = (value) => {
    FiltersProducts('price',"=",price[1])
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });

    // reset
    setCategoryIds("");
    setPrice(value);
    setStar("");
    setSub("");
    setBrand("");
    setShipping("");
    setTimeout(() => {
      setOk(!ok);
    }, 300);
  };


  // 4. load products based on category
  // show categories in a list of checkbox
  const showCategories = () =>
    categories.map((c) => (
      <div key={c._id}>
        <Radio
          onChange={handleCheck}
          className="pb-2 pl-4 pr-4"
          value={c._id}
          name={c._id}
          checked={c._id===categoryIds}
        >
          {c.name}
        </Radio>
        <br />
      </div>
    ));
  let FiltersProducts = async(filterBy, operator, arg) => {
      
        const json= await axios.get(`${process.env.REACT_APP_API}/search/filters?${filterBy}${operator}${arg}`)
        setProducts([...json.data])
        
  }
  // handle check for categories
  const handleCheck = (e) => {
    setCategoryIds(e.target.value)
    
    FiltersProducts("category","=",e.target.value);
  
    // reset
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setPrice([0, 0]);
    setStar("");
    setSub("");
    setBrand("");
    
    setShipping("");

  };

  // 5. show products by star rating
  const handleStarClick = (num) => {
    FiltersProducts('stars',"=",num)
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setPrice([0, 0]);
    setCategoryIds("");
    setStar(num);
    setSub("");
    setBrand("");
    setShipping("");
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

  // 6. show products by sub category
  const showSubs = () =>
    subs.map((s) => (
      <div
        key={s._id}
        onClick={() => handleSub(s)}
        className="p-1 m-1 badge badge-secondary"
        style={{ cursor: "pointer" }}
      >
        {s.name}
      </div>
    ));

  const handleSub = (sub) => {
    // console.log("SUB", sub);
    setSub(sub);
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setPrice([0, 0]);
    setCategoryIds("");
    setStar("");
    setBrand("");
    setShipping("");
    fetchProducts({ sub });
  };

  // 7. show products based on brand name
  const showBrands = () =>
    brands.map((b, i) => (
     
      <Radio
        key={i}
        value={b}
        name={b}
        checked={b === brand}
        onChange={handleBrand}
        className="pb-1 pl-4 pr-4"
      >
        {b}
      </Radio>
    ));

  const handleBrand = (e) => {
    
    FiltersProducts('brand',"=",e.target.value)

    setSub("");
    setPrice([0, 0]);
    setCategoryIds("");
    setStar("");
    setBrand(e.target.value);
    setShipping("");
    // fetchProducts({ brand: e.target.value });
  };

  // 9. show products based on shipping yes/no
  const showShipping = () => (
    <>
      <Checkbox
        className="pb-2 pl-4 pr-4"
        onChange={handleShippingchange}
        value="AVAILABLE"
        checked={shipping === "AVAILABLE"}
      >
        {t("Y")}
      </Checkbox>

      <Checkbox
        className="pb-2 pl-4 pr-4"
        onChange={handleShippingchange}
        value="SOLD"
        checked={shipping === "SOLD"}
      >
        {t("NO")}
      </Checkbox>
    </>
  );

  const handleShippingchange = (e) => {
    setSub("");
    FiltersProducts('availability',"=",e.target.value)
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setPrice([0, 0]);
    setCategoryIds("");
    setStar("");
    setBrand("");
    setShipping(e.target.value);
    fetchProducts({ shipping: e.target.value });
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 pt-2">
          <h4 className="mt-3">{t("FiL")}</h4>
          <hr />

          <Menu
            defaultOpenKeys={["1", "2", "3", "4", "5", "6", "7"]}
            mode="inline"
          >
            {/* price */}
            <SubMenu
              key="1"
              title={
                <span className="h6">
                  <DollarOutlined /> {t("PRI")}
                </span>
              }
            >
              <div>
                <Slider
                  className="ml-4 mr-4"
                  tipFormatter={(v) => `R$ ${v}`}
                  range
                  value={price}
                  onChange={handleSlider}
                  max="500000"
                />
              </div>
            </SubMenu>

            {/* category */}
            <SubMenu
              key="2"
              title={
                <span className="h6">
                  <DownSquareOutlined /> {t("CAT")}
                </span>
              }
            >
              <div style={{ maringTop: "-10px" }}>{showCategories()}</div>
            </SubMenu>

            {/* stars */}
            <SubMenu
              key="3"
              title={
                <span className="h6">
                  <StarOutlined /> {t("RT")}
                </span>
              }
            >
              <div style={{ maringTop: "-10px"}}>{showStars()}</div>
            </SubMenu>

            

            {/* brands */}
            <SubMenu
              key="5"
              title={
                <span className="h6">
                  <DownSquareOutlined /> {t("BRA")}
                </span>
              }
            >
              <div style={{ maringTop: "-10px", maxWidth:"200px" }}>{showBrands()} </div>
            
            </SubMenu>

           
            {/* shipping */}
            <SubMenu
              key="7"
              title={
                <span className="h6">
                  <DownSquareOutlined /> {t("AV")}
                </span>
              }
            >
              <div style={{ maringTop: "-10px" }} className="pr-5">
                {showShipping()}
              </div>
            </SubMenu>
          </Menu>
        </div>

        <div className="col-md-9 pt-2">
          {loading ? (
            <h4 className="text-danger">{t("LOA")}</h4>
          ) : (
            <h4 className="text-danger mt-5">{t("PRO")}</h4>
          )}

          {products.length < 1 && <p>{t("NPR")}</p>}

          <div className="row pb-5">
            {products.map((p) => (
              <div key={p._id} className="col-md-4 mt-3">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;


