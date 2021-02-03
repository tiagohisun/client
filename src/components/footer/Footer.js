import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
//import { AiFillPhone } from "react-icons/ai";
import { MdEmail, MdLocationOn } from "react-icons/md";
import logo from "../../static/images/logo/logonb.png"
import '../../static/css/footer.css';
//import emailjs from "emailjs-com";
const Footer = () => {
  const [ isModalVisible, setIsModalVisible ] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState(null);
  const [message, setMessage] = useState("Newsletter");
  
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


  const mailsender = () => {
    if (name === "" || email === "" || message === "") {
      alert("please fill the form");
    } else {
      var data = 'This is your data from here';

      axios
        .post(`${process.env.REACT_APP_API}/email`, {
          name: name,
          from: email,
          text: `
          Name: ${name}
          Email: ${email}
          Phone: ${phonenumber}
          Interested in : ${message}
          `
        })
        .then((r) => {
          openNotification("Email Send Successfully", "We will contact you as soon as possible")
          setIsModalVisible(false);
          setEmail('')
          setMessage('')
          setName('')
          setPhonenumber('')
        }
        )
        .catch((e) => openNotification("Something error here","Check your internet connecting..."));
    }
  };
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 12,
    },
  };
  //const [message, setMessage] = useState("");
  //function sendEmail(e) {
  //  e.preventDefault();
//
  //  emailjs
  //    .sendForm(
  //      "testemail",
  //      "template_flkh36l",
  //      e.target,
  //      "user_eyDNBhP1Z4UkiEOVAGGoc"
  //    )
  //    .then(
  //      (result) => {
  //        setMessage("Thank You...");
  //        console.log(result.text);
  //      },
  //      (error) => {
  //        setMessage("Something Wrong...");
  //        console.log(error.text);
  //      }
  //    );
  //  e.target.reset();
  //}
  return (
    <div
      className="footer-container"
      style={{
        height: "400px",
        width: "100%",
        color: "#afb4bf",
        backgroundColor: "#001f24",
      }}
    >
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-sm-12 col-md-3">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ margin: "20px" }}>
              <Link to="/">
                <img
                  style={{ width: "150px", paddingBottom: "20px" }}
                  src={logo}
                />
                </Link>

                <div style={{ display: "flex" }} className="mb-3">
                  <div>
                   
                  </div>
                  <div style={{ fontSize: "15px", marginLeft: "10px" }}>
                    +55 11 985526927
                  </div>
                </div>
                <div style={{ display: "flex" }} className="mb-3">
                  <div>
                    
                  </div>
                  <div style={{ marginLeft: "10px", fontSize: "15px" }}>
                    contato@dental04.com
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div>
                    
                  </div>
                  <div style={{ marginLeft: "10px", fontSize: "15px" }}>
                    Av Yojiro Takaoka, 438, 7th floor - Alphaville - SP
                    <br /> 06541-038, Brazil
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: "12px", paddingTop: "40px" }}>
                    &copy; DENTAL04 All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="row mt-5">
              <div className="col-4">
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>FEATURES</p>
                <div style={{ fontSize: "14px", color: "grey" }}>
                  <p>
                    <a style={{color:"grey"}} href="/posts">Blog</a>
                  </p>
                  <p>
                    <a style={{color:"grey"}} href="/shop">Classifieds</a>
                  </p>
                </div>
              </div>
              <div className="col-4">
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>COMPANY</p>
                <div style={{ fontSize: "14px", color: "grey" }}>
                  <p>
                    <a style={{color:"grey"}} href="/about">About</a>
                  </p>
                  <p>
                    <a style={{color:"grey"}} href="/about#ourMission">Goal</a>
                  </p>
                  <p>
                    <a style={{color:"grey"}} href="/about#privacy">Policy</a>
                  </p>
                </div>
              </div>
              <div className="col-4">
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                  GET STARTED
                </p>
                <div style={{ fontSize: "14px", color: "grey" }}>
                  <p>
                    <a style={{color:"grey"}} href="/contact">Contact</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-3 mt-5">
            
           <div style={{ marginTop: "30px" }}>

           
      <Form style={{width:"200px"}}>
        
          <input style={{height:"25px", marginBottom:"12px", border:"none", color:"black",  width:"200px", textAlign: "center", backgroundColor:"lightGray"}}
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        
        
          <input style={{height:"25px", marginBottom:"12px", border:"none", color:"black",  width:"200px", textAlign: "center", backgroundColor:"lightGray"}}
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        
  
          <input style={{height:"25px", marginBottom:"12px", border:"none", color:"black", width:"200px", textAlign: "center", backgroundColor:"lightGray"}}
            type="text"
            placeholder="Your Phone Number"
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
          />
        

        <Form.Item label="Message" hidden={true}>
          <Input.TextArea 
            type="hidden"
            rows={4}
            placeholder="Enter Your Message......!"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
          <div style={{ textAlign: "center"}}>
            <Button
              style={{right:"83px", width:"200px", textAlign: "center" }}
              type="primary"
              htmlType="submit"
              onClick={() => mailsender()}
              block
            >
              Submit
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
