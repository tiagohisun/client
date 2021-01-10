import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState(null);
  const [message, setMessage] = useState("");

  const mailsender = () => {
    if (name === "" || email === "" || message === "") {
      alert("please fill the form");
    } else {
      var data = { message, phonenumber };

      axios
        .post(`${process.env.REACT_APP_API}/email`, {
          name: name,
          email: email,
          msg: data,
        })
        .then((r) => console.log("msg send", r))
        .catch((e) => console.log("error", e));
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

  return (
    <div style={{ marginTop: "30px" }}>
      <Form {...layout} name="nest-messages">
        <Form.Item label="Name">
          <Input
            type="text"
            placeholder="Enter Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Email">
          <Input
            type="email"
            placeholder="Enter Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Phone Number">
          <Input
            type="text"
            placeholder="Enter Your Phonen Number (Optional)"
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
          />
        </Form.Item>

        <Form.Item label="Message">
          <Input.TextArea
            rows={4}
            placeholder="Enter Your Message......!"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
          <div style={{ textAlign: "center", marginRight: "257px" }}>
            <Button
              style={{ textAlign: "center" }}
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
  );
};

export default Contact;
