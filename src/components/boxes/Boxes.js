import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import services from '../../static/images/boxes/services.jpg';
import classifieds from '../../static/images/boxes/classifieds.jpg';
import { useTranslation } from 'react-i18next';

import blog from '../../static/images/boxes/blog.jpg';

const Boxes = (props) => {
	const { t, i18n } = useTranslation();
	return (
		<div
			className="container"
		
		>
			<div className="row">
				<div className="col-sm-12 col-md-4 col-lg-4">
					<Link to="/">
						<div style={{ width: '350px', minheight: '300px' }} />
						<CardImg top style={{ width: '350px', height: '230px' }} src={blog} alt="Card image cap" />
						<Card
							style={{
								display: 'absolute',
								zIndex: '2',
								width: '350px',
								height: '190px',
								transform: 'translateY(-50px)',
								opacity: '0.7',
								textAlign: 'center'
							}}
							body
						>
							<CardTitle style={{ color: 'black', cursor: 'pointer', transform: 'translateY(-10px)' }}>
								<strong>{t('A-S')}</strong>
								<hr className="hr" />
							</CardTitle>
							<CardText style={{ color: 'black' }}>{t('A-SM')}</CardText>
						</Card>
					</Link>
				</div>
				<div className="col-sm-12 col-md-4 col-lg-4">
					<Link to="/shop">
						<div style={{ width: '350px', minheight: '300px' }} />
						<CardImg
							top
							style={{ width: '350px', height: '230px' }}
							src={classifieds}
							alt="Card image cap"
						/>
						<Card
							style={{
								display: 'absolute',
								zIndex: '2',
								width: '350px',
								height: '190px',
								transform: 'translateY(-50px)',
								opacity: '0.7',
								textAlign: 'center'
							}}
							body
						>
							<CardTitle style={{ color: 'black', cursor: 'pointer', transform: 'translateY(-10px)' }}>
								<strong>{t('CL')}</strong>
								<hr />
							</CardTitle>
							<CardText style={{ color: 'black', paddingBottom: '40px' }}>{t('CL-M')}</CardText>
						</Card>
					</Link>
				</div>
				<div className="col-sm-12 col-md-4 col-lg-4">
					<Link to="/services">
						<div style={{ width: '350px', minheight: '300px' }} />
						<CardImg top style={{ width: '350px', height: '230px' }} src={services} alt="Card image cap" />
						<Card
							style={{
								display: 'absolute',
								zIndex: '2',
								width: '350px',
								height: '190px',
								transform: 'translateY(-50px)',
								opacity: '0.7',
								textAlign: 'center'
							}}
							body
						>
							<CardTitle style={{ color: 'black', cursor: 'pointer', transform: 'translateY(-10px)' }}>
								<strong>{t('SE')}</strong>
								<hr />
							</CardTitle>
							<CardText style={{ color: 'black', paddingBottom: '40px' }}>{t('S-M')}</CardText>
						</Card>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Boxes;
