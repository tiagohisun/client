import React,{useState} from "react";
import { Card, Tabs,Modal,Button ,notification,Input} from "antd";
import { Link } from "react-router-dom";
import { HeartOutlined, ContactsOutlined } from "@ant-design/icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Laptop from "../../images/laptop.png";
import ProductListItems from "./ProductListItems";
import StarRating from "react-star-ratings";
import RatingModal from "../modal/RatingModal";
import { showAverage } from "../../functions/rating";
import axios from 'axios'
const { TabPane } = Tabs;

// this is childrend component of Product page
const SingleProduct = ({ product, onStarClick, star }) => {
  const { model, images, description, _id } = product;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  console.log("Product=>",product)
  const showModal = () => {
    setIsModalVisible(true);
  };
  const openNotification = (message,description) => {
    notification.open({
      message: message,
      description:description,
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  const handleOk = () => {
    if (name === "" || email === "" || message === "") {
      alert("please fill the form");
    } else {
      var data = 'This is your data from here';

      axios
        .post(`${process.env.REACT_APP_API}/email`, {
          name: name,
          from: email,
          text: `ID : ${product._id} 
                 Title : ${product.title}
                 Price : ${product.price}
                 Brand : ${product.brand}
                 Location : ${product.location}
                 Description : ${product.description}
                 Message : ${message}
          `,
        })
        .then((r) => {
          openNotification("Message Send Successfully", "We will contact you as soon as possible")
          setIsModalVisible(false);
          setEmail('')
          setMessage('')
          setName('')
        }
        )
        .catch((e) => openNotification("Something error here","Check your internet connecting..."));
    }
    
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <div className="col-md-7">
        {images && images.length ? (
          <Carousel showArrows={true} autoPlay infiniteLoop>
            {images && images.map((i) => <img src={i.url} key={i.public_id} />)}
          </Carousel>
        ) : (
          <Card cover={<img src={Laptop} className="mb-3 card-image" />}></Card>
        )}

        <Tabs type="card">
          <TabPane tab="Description" key="1">
            {description && description}
          </TabPane>
          <TabPane tab="More" key="2">
            Call use on xxxx xxx xxx to learn more about this product.
          </TabPane>
        </Tabs>
      </div>

      <div className="col-md-5">
        <h1 className="bg-info p-3">{model}</h1>

        {product && product.ratings && product.ratings.length > 0 ? (
          showAverage(product)
        ) : (
          <div className="text-center pt-1 pb-3">No rating yet</div>
        )}

        <Card onClick={showModal}
          actions={[
            <>
              <ContactsOutlined className="text-success" /> <br />
              Contact
            </>,
           
            <RatingModal>
              <StarRating
                name={_id}
                numberOfStars={5}
                rating={star}
                changeRating={onStarClick}
                isSelectable={true}
                starRatedColor="red"
              />
            </RatingModal>,
          ]}
        >
          <ProductListItems product={product} />
        </Card>
        <Modal title="Contact Us" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>Back</Button>,
            <Button key="enter" onClick={handleOk}>Send Message</Button>,
            
        ]}
        >
          <p>ID : { product._id }</p>
          <p>Title : { product.title }</p>
          <p>Brand : { product.brand }</p>
          <p>Location : {product.location}</p>
          <p>Price : { product.price }</p>
          <p>Description : {product.description}</p>
          <p>Email </p>
          <Input value={email} type="email" onChange={(e)=>setEmail(e.target.value)} />
          <p>Name </p>
          <Input value={name} type="text" onChange={(e)=>setName(e.target.value)} />
          <p>Message</p>
          <Input.TextArea rows="4" value={message} onChange={(e)=>setMessage(e.target.value)} />
        </Modal>
      </div>
    </>
  );
};

export default SingleProduct;
