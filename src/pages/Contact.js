import React, { useState } from 'react';
import { Form, Input, Button, notification } from 'antd';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import styles from './Contact.module.css'
const Contact = () => {
	const { t, i18n } = useTranslation();
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ phonenumber, setPhonenumber ] = useState(null);
	const [ message, setMessage ] = useState('');

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
					text: `Name: ${name}
          Email: ${email} 
          Phone: ${phonenumber}
          Message: ${message}
          `
				})
				.then((r) => {
					openNotification('Email Send Successfully', 'We will contact you as soon as possible');
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
			span: 24
		},
		wrapperCol: {
			span: 24
		}
	};

	return (
		<div style={{ marginTop: '30px' }} className="row">
			<div className="col">
				<div className={styles.formSize}>
				<Form name="nest-messages">
					<Form.Item name="name" label={t('N')} rules={[ { type: 'string', required: true } ]}>
						<Input
							type="text"
							placeholder={t('YN')}
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</Form.Item>
					<Form.Item name="email" label="Email" rules={[ { type: 'email', required: true } ]}>
						<Input
							type="email"
							placeholder={t('YE')}
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Form.Item>
					<Form.Item name="phonenumber" label={t('P')} rules={[ { type: 'string' } ]}>
						<Input
							type="text"
							placeholder={t('YP')}
							value={phonenumber}
							onChange={(e) => setPhonenumber(e.target.value)}
						/>
					</Form.Item>

					<Form.Item name="message" label={t('M')} rules={[ { required: true } ]}>
						<Input.TextArea
							rows={4}
							placeholder={t('YMA')}
							required
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
					</Form.Item>
					<Form.Item >
						<div style={{ textAlign: 'center',  }}>
							<Button
								style={{ textAlign: 'center' }}
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
	);
};

export default Contact;
