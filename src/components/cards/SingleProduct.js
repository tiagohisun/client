import React, { useState } from 'react';
import { Card, Tabs, Modal, Button, notification, Input, Form } from 'antd';
import { Link } from 'react-router-dom';
import { HeartOutlined, ContactsOutlined } from '@ant-design/icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Laptop from '../../images/laptop.png';
import ProductListItems from './ProductListItems';
import StarRating from 'react-star-ratings';
import RatingModal from '../modal/RatingModal';
import { showAverage } from '../../functions/rating';
import axios from 'axios';
import {useTranslation} from 'react-i18next'
const { TabPane } = Tabs;

// this is childrend component of Product page
const SingleProduct = ({ product, onStarClick, star }) => {
	const {t, i18n} = useTranslation();
	const { model, images, description, _id } = product;
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
				`Interested in: ${product._id} 
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
			<div className="col-md-7">
				{images && images.length ? (
					<Carousel showArrows={true} autoPlay infiniteLoop>
						{images && images.map((i) => <img src={i.url} key={i.public_id} />)}
					</Carousel>
				) : (
					<Card cover={<img src={Laptop} className="mb-3 card-image" />} />
				)}

				<Tabs type="card">
					<TabPane tab={t("DES")} key="1">
						{description && description}
					</TabPane>
					<TabPane tab={t("MO")} key="2">
						{t("CAL")}
					</TabPane>
				</Tabs>
			</div>

			<div className="col-md-5">
				<h1 className="bg-info p-3">{model}</h1>

				{product && product.ratings && product.ratings.length > 0 ? (
					showAverage(product)
				) : (
					<div className="text-center pt-1 pb-3">{t("NR")}</div>
				)}

				<Card
					actions={[
						<React.Fragment>
						<ContactsOutlined onClick={showModal} className="text-success" /> <br />
							{t("CT")}
						</React.Fragment>,

						<RatingModal>
							<StarRating
								name={_id}
								numberOfStars={5}
								rating={star}
								changeRating={onStarClick}
								isSelectable={true}
								starRatedColor="red"
							/>
						</RatingModal>
					]}
				>
					<ProductListItems product={product} />
				</Card>
				<Modal
					title={t("CTM")}
					visible={isModalVisible}
					onOk={handleOk}
					onCancel={handleCancel}
					footer={[
						<Button key="back" onClick={handleCancel}>
							{t("BA")}
						</Button>,
						<Button key="enter" onClick={handleOk}>
							{t("SM")}
						</Button>
					]}
				>
					<Form onFinish={handleOk}>
						<Form.Item name="email" label="Email" rules={[ { type: 'email', required: true } ]}>
							
							<Input value={email} onChange={(e) => setEmail(e.target.value)} />
						</Form.Item>
						<Form.Item name="name" label={t("N")} rules={[ { type: 'string', required: true } ]}>
							
							<Input value={name} onChange={(e) => setName(e.target.value)} />
						</Form.Item>
						<Form.Item name="message" label={t("M")} rules={[ { type: 'string', required: true } ]}>
							
							<Input.TextArea rows="4" placeholder={t("IN")} value={message} onChange={(e) => setMessage(e.target.value)} />
						</Form.Item>
					</Form>
				</Modal>
			</div>
		</React.Fragment>
	);
};

export default SingleProduct;
