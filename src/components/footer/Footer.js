import React, { useState } from 'react';

import { Form, Input, Button, notification } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles.css';
//import { AiFillPhone } from "react-icons/ai";
import { MdEmail, MdLocationOn } from 'react-icons/md';

import logo from '../../static/images/logo/logonb.png';
import '../../static/css/footer.css';

import { useTranslation } from 'react-i18next';
//import emailjs from "emailjs-com";
const Footer = () => {
	const [ isModalVisible, setIsModalVisible ] = useState(false);
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ phonenumber, setPhonenumber ] = useState(null);
	const [ message, setMessage ] = useState('Newsletter');

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

	const mailsender = () => {
		if (name === '' || email === '' || message === '') {
			alert('please fill the form');
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
					openNotification('Email Send Successfully', 'We will contact you as soon as possible');
					setIsModalVisible(false);
					setEmail('');
					setMessage('');
					setName('');
					setPhonenumber('');
				})
				.catch((e) => openNotification('Something error here', 'Check your internet connecting...'));
		}
	};
	const layout = {
		labelCol: {
			span: 8
		},
		wrapperCol: {
			span: 12
		}
	};
	const { t, i18n } = useTranslation();
	return (
		<div
			className="footer-container"
			style={{
				width: '100%',
				color: '#afb4bf',
				backgroundColor: '#001f24'
			}}
		>
			<div className="container-fluid footer-mobile">
				<div className="row mt-5">
					<div className="col-sm-12 col-md-3">
						<div style={{ display: 'flex', justifyContent: 'space-between' }}>
							<div style={{ margin: '5px' }}>
								<Link to="/">
									<img style={{ width: '150px', paddingBottom: '20px' }} src={logo} />
								</Link>

								<div style={{ display: 'flex' }} className="mb-3">
									<div />
									<div style={{ fontSize: '15px', marginLeft: '10px' }}>+55 11 985526927</div>
								</div>
								<div style={{ display: 'flex' }} className="mb-3">
									<div />
									<div style={{ marginLeft: '10px', fontSize: '15px' }}>contato@dental04.com</div>
								</div>
								<div style={{ display: 'flex' }}>
									<div />
									<div style={{ marginLeft: '10px', fontSize: '15px' }}>
										Av Yojiro Takaoka, 438, {t('FL')} - Alphaville - SP
										<br /> 06541-038, {t('BZ')}
									</div>
								</div>
								<div>
									<p style={{ fontSize: '12px', paddingTop: '40px' }}>&copy; {t('CPR')}</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-6">
						<div className="row mt-5">
							<div className="col-sm-12 col-md-4 col-lg-4">
								<p style={{ fontSize: '20px', fontWeight: 'bold' }}>{t('FT')}</p>
								<div style={{ fontSize: '14px', color: 'grey' }}>
									<p>
										<a style={{ color: 'grey' }} href="/posts">
											Blog
										</a>
									</p>
									<p>
										<a style={{ color: 'grey' }} href="/shop">
											{t('CS')}
										</a>
									</p>
								</div>
							</div>
							<div className="col-sm-12 col-md-4 col-lg-4">
								<p style={{ fontSize: '20px', fontWeight: 'bold' }}>{t('CMP')}</p>
								<div style={{ fontSize: '14px', color: 'grey' }}>
									<p>
										<a style={{ color: 'grey' }} href="/about">
											{t('AB')}
										</a>
									</p>
									<p>
										<a style={{ color: 'grey' }} href="/about#ourMission">
											{t('GL')}
										</a>
									</p>
									<p>
										<a style={{ color: 'grey' }} href="/about#privacy">
											{t('PL')}
										</a>
									</p>
								</div>
							</div>
							<div className="col-sm-12 col-md-4 col-lg-4">
								<p style={{ fontSize: '20px', fontWeight: 'bold' }}>{t('GST')}</p>
								<div style={{ fontSize: '14px', color: 'grey' }}>
									<p>
										<a style={{ color: 'grey' }} href="/contact">
											{t('CT')}
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-3 col-lg-3 ">
						<div style={{ marginTop: '30px' }} className="footer-Newsletter">
							<Form>
								<input
									style={{
										height: '25px',
										marginBottom: '12px',
										border: 'none',
										color: 'black',
										width: '250px',
										textAlign: 'center',
										backgroundColor: 'lightGray'
									}}
									type="text"
									placeholder={t('YN')}
									required
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>

								<input
									style={{
										height: '25px',
										marginBottom: '12px',
										border: 'none',
										color: 'black',
										width: '250px',
										textAlign: 'center',
										backgroundColor: 'lightGray'
									}}
									type="email"
									placeholder={t('YE')}
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>

								<input
									style={{
										height: '25px',
										marginBottom: '12px',
										border: 'none',
										color: 'black',
										width: '250px',
										textAlign: 'center',
										backgroundColor: 'lightGray'
									}}
									type="text"
									placeholder={t('YN')}
									value={phonenumber}
									onChange={(e) => setPhonenumber(e.target.value)}
								/>

								<Form.Item label="Message" hidden={true}>
									<Input.TextArea
										type="hidden"
										rows={4}
										placeholder={t('YP')}
										required
										value={message}
										onChange={(e) => setMessage(e.target.value)}
									/>
								</Form.Item>
								<Form.Item>
									<div>
										<Button
											style={{ width: '250px', textAlign: 'center' }}
											type="primary"
											htmlType="submit"
											onClick={() => mailsender()}
											block
										>
											{t('SB')}
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
