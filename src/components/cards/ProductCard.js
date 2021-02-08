import React, { useState } from 'react';
import { Card, Tabs, Modal, Button, notification, Input, Form } from 'antd';
import { EyeOutlined, ContactsOutlined, HeartOutlined} from '@ant-design/icons';
import laptop from '../../images/laptop.png';
import { Link } from 'react-router-dom';
import { showAverage } from '../../functions/rating';
import ProductListItems from './ProductListItems';
import axios from 'axios';
const { TabPane } = Tabs;

const { Meta } = Card;

const ProductCard = ({ product }) => {
	// destructure
	const { title, slug, price, year, location, model, description, _id, images,  } = product;
	const [ isModalVisible, setIsModalVisible ] = useState(false);
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ message, setMessage ] = useState('I´m interested in this unit');
	console.log('Product=>', product);

	const showModal = () => {
		setIsModalVisible(true);
	};
	const openNotification = (message, description) => {
		notification.open({
			message: message,
			description: description,
			onClick: () => {
				console.log('Notification Clicked!');
			}
		});
	};

	const handleOk = () => {
		if (name === '' || email === '' || message === '') {
			alert('please fill the form');
		} else {
			var data = 'This is your data from here';

			axios
				.post(`${process.env.REACT_APP_API}/email`, {
					name: name,
					from: email,
					text: 
				`Interested in : ${product._id} 
                 Title : ${product.title}
                 Price : ${product.price}
                 Brand : ${product.brand}
                 Location : ${product.location}
                 Description : ${product.description}
                 Message : ${message}
          `
				})
				.then((r) => {
					openNotification('Message Send Successfully', 'We will contact you as soon as possible');
					setIsModalVisible(false);
					setEmail('');
					setMessage('');
					setName('');
				})
				.catch((e) => openNotification('Something error here', 'Check your internet connecting...'));
		}
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<React.Fragment>
			{product && product.ratings && product.ratings.length > 0 ? (
				showAverage(product)
			) : (
				<div className="text-center pt-1 pb-3">No rating yet</div>
			)}

			<Card
				onClick={showModal}
				cover={
					<img
						src={images && images.length ? images[0].url : laptop}
						style={{ height: '150px', objectFit: 'cover' }}
						className="p-1"
					/>
				}
				actions={[
					<Link to={`/product/${slug}`}>
						<EyeOutlined className="text-warning" /> <br /> View Product
					</Link>,
					<React.Fragment>
						<ContactsOutlined className="text-danger" /> <br /> Contact
					</React.Fragment>
				]}
			>
				<Meta className="pb-1" title={`${model}`} />

				<Meta className="pb-1" title={`${year}`} />

				<Meta className="pb-1" title={`${location}`} />

				<Meta
					className="pb-1"
					title={`R$ ${price}`}
					description={`${description && description.substring(0, 40)}...`}
				/>
			</Card>
			<Modal
					title="Contact Us"
					visible={isModalVisible}
					onOk={handleOk}
					onCancel={handleCancel}
					footer={[
						<Button key="back" onClick={handleCancel}>
							Back
						</Button>,
						<Button key="enter" onClick={handleOk}>
							Send Message
						</Button>
					]}
				>
					<Form onFinish={handleOk}>
						<Form.Item name="email" label="Email" rules={[ { type: 'email', required: true } ]}>
							
							<Input value={email} onChange={(e) => setEmail(e.target.value)} />
						</Form.Item>
						<Form.Item name="name" label="Name" rules={[ { type: 'string', required: true } ]}>
							
							<Input value={name} onChange={(e) => setName(e.target.value)} />
						</Form.Item>
						<Form.Item name="message" label="Message" rules={[ { type: 'string', required: true } ]}>
							
							<Input.TextArea rows="4" placeholder="I´m interested in this unit" value={message} onChange={(e) => setMessage(e.target.value)} />
						</Form.Item>
					</Form>
				</Modal>
		</React.Fragment>
	);
};

export default ProductCard;
