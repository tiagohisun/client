import React, { useState, useEffect, Component } from 'react';
import { getPostsByCount, fetchPostsByFilter } from '../../../functions/post';
import { MdDateRange } from 'react-icons/md';
import {
	AiOutlineComment,
	AiOutlineArrowLeft,
	AiOutlineArrowRight,
	AiFillYoutube,
	AiFillFacebook,
	AiFillTwitterSquare
} from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import RowCard from '../../../components/cards/post/RowCard';
import MiniLinePostCard from '../../../components/cards/post/MiniLinePostCard';
import MiniTextPostCard from '../../../components/cards/post/MiniTextPostCard';
import { Menu, Checkbox, Card } from 'antd';
import { DollarOutlined, DownSquareOutlined, StarOutlined } from '@ant-design/icons';
import laptop from '../../../images/laptop.png';
import image from '../../../static/images/boxes/classifieds.jpg';
import { FiMessageCircle } from 'react-icons/fi';
import { WiTime1 } from 'react-icons/wi';
import { FiEdit } from 'react-icons/fi';
import { FaGreaterThan } from 'react-icons/fa';
import Star from '../../../components/forms/Star';
import './style.scss';
import MainBlogPosts from '../../../components/cards/post/imagecards/MainBlogPosts';


const FeaturedBlog = () => {
	return (
		<div className="">
			<div className="ftd-crd">
				<img
					width="100%"
					src="https://images.unsplash.com/photo-1611338522368-3fccf11b4afd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
					alt=" source"
				/>
			</div>
			<div style={{marginTop:"3px"}}>
				<h6>Here is heading About the blog that is related to their topics</h6>
			</div>
			<p style={{ fontSize: '10px', color: 'gray' }}>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
				industry's standard dummy text ever since the 1500s,
			</p>
			<br/>
			<div style={{ display: 'flex', justifyContent: 'space-between', marginTop:"10px" }}>
				<h6 style={{ fontWeight: 'bolder', fontSize: '10px' }}>
					Steve Jobs  &nbsp; &nbsp;<span style={{ fontWeight: 'lighter',  fontSize: '10px' }}> August 17,2018</span>
				</h6>
				<hr/>
			</div>
		</div>
	);
};

const LatestBlog = () => {
	return (
		<div className="">
			<div className="featured-card">
				<img
					width="200px"
					src="https://images.unsplash.com/photo-1611338522368-3fccf11b4afd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
					alt=" source"
				/>
				<div className="featured-card-overly">
					<h6>Develop & design</h6>
				</div>
			</div>
			<div style={{marginTop:"26px"}}>
				<h6 style={{ fontSize:"10px"}}>Here is heading About the blog that is related to their topics</h6>
			</div>
			<div style={{ display: 'flex' }}>
				<p style={{ fontWeight: 'bolder', fontSize: '10px' }}>
					Steve Jobs <span style={{ fontWeight: 'lighter', fontSize: '10px' }}>August 17,2018</span>
				</p>
			</div>
		</div>
	);
};

const DesignHouse = () => {
	return (
		<div className="m-0">
			<div className="featured-card">
				<img
					width="100%"
					src="https://images.unsplash.com/photo-1611338522368-3fccf11b4afd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
					alt=" source"
				/>
				<div className="featured-card-overly">
					<p style={{fontSize:"10px"}}>Develop & design</p>
				</div>
			</div>
			<div style={{ padding: '5px' }}>
				<h6>Here is heading About the blog that is related to their topics</h6>
			</div>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<p style={{ fontWeight: 'lighter', fontSize:"10px" }}>
					Steve Jobs &nbsp;&nbsp;&nbsp;<span style={{ fontWeight: 'lighter', fontSize: '10px' }}>August 17,2018</span>
				</p>
			</div>
		</div>
	);
};

const MostPopular = () => {
	return (
		<div className="most-popular mt-3 mb-1">
			<div>
				<img id="mostpopularimg"
					width="100px"
					height="80px"
					src="https://images.unsplash.com/photo-1611338522368-3fccf11b4afd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
					alt=" source"
				/>
			</div>
			<div>
				<p style={{fontSize: '12px', margin:"0" }}>Here is heading about the post blog that is related to their blog</p>
				<br/>
				<br/>
				<span>August222,2020</span>
			</div>
		</div>
	);
};

const SocialConnection = ({ Icon, sb, message }) => {
	return (
		<div style={{ display: 'flex', justifyContent: 'space-between', marginTop:"4px"}}>
			<div>
				{Icon}
				<span style={{ marginLeft: '15px', fontWeight: 'bolder' }}></span>
			</div>
			<div style={{ marginTop: '20px', fontWeight: 'bold' }}>{message}</div>
		</div>
	);
};

function Main({post}) {
	
const [ posts, setPosts ] = useState([]);
	const [ loading, setLoading ] = useState(false);
	const [ price, setPrice ] = useState([ 0, 0 ]);
	const [ ok, setOk ] = useState(false);
	const [ categories, setCategories ] = useState([]);
	const [ categoryIds, setCategoryIds ] = useState([]);
	const [ star, setStar ] = useState('');
	const [ tags, setTags ] = useState([]);
	const [ tag, setTag ] = useState('');

	let dispatch = useDispatch();
	let { search } = useSelector((state) => ({ ...state }));
	const { text } = search;
	useEffect(() => {
		getPostsByCount(20).then((p) => {
			console.log(p.data);
			setPosts(p.data);
		});
	}, []);
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	let categoreypost = [];
	let latestpost = [];
	let educategorypostdesc = [];
	let techcategorypostdesc = [];

	//latestpost.push(posts[0]);
	for (let i = 0; i < posts.length; i++) {
		const element = posts[i];
		if (i === posts.length - 1) {
			latestpost.push(posts[i]);
		}
		//console.log(element.postcategory.name === "Dental News");
		if (element.postcategory.name === 'Dental News') {
			// console.log(i, ":", element.postcategory.name);
      categoreypost.push(posts[i]);
     
		}
		if (element.postcategory.name === 'Education') {
			educategorypostdesc.push(posts[i]);
		}
		if (element.postcategory.name === 'Technology') {
			techcategorypostdesc.push(posts[i]);
		}
	}
console.log("categorypost",categoreypost)
	let newcategoreypost = categoreypost.slice(1, 2);

	let latestdentail = categoreypost.slice(-1);
	let latesteduc = educategorypostdesc.slice(-1);
	let latesttech = techcategorypostdesc.slice(-1);
	let allblglatest = [ ...latestdentail, ...latesteduc, ...latesttech ];

	let second_latest_o = [ ...categoreypost.slice(-2, -1) ];
	let second_latest_t = [ ...educategorypostdesc.slice(-2, -1) ];
	let second_latest_th = [ ...techcategorypostdesc.slice(-2, -1) ];

	let third_latest_o = [ ...categoreypost.slice(-3, -2) ];
	let third_latest_t = [ ...educategorypostdesc.slice(-3, -2) ];
	let third_latest_th = [ ...techcategorypostdesc.slice(-3, -2) ];

	let four_five_six_edulatest = [
		...educategorypostdesc.slice(-3, -2),
		...educategorypostdesc.slice(-2, -1),
		...educategorypostdesc.slice(-1)
	];
	let four_five_six_dentlatest = [
		...categoreypost.slice(-3, -2)
		//...categoreypost.slice(-2, -1),
		// ...categoreypost.slice(-1),
	];

	//console.log(four_five_six_dentlatest);

	const digituniq = [ ...new Set(post) ].filter((item) => item.postcategory === 'Dental News').slice(0, 8);


	return (
		<>
		<ul
				className="nav position-relative bg-dark mt-5"
				style={{ fontSize: '12px', height: '35px', marginLeft: '145px', width: '970px' }}
			>
				<li className="nav-item" style={{ borderRight: '1px solid #ccc' }}>
					<a className="nav-link" href="#">
						Main
					</a>
				</li>
				<li className="nav-item" style={{ borderRight: '1px solid #ccc' }}>
					<a className="nav-link" href="/posts/dentalnews">
						Dental News
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" style={{ borderRight: '1px solid #ccc' }} href="/posts/technology">
						Technology
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" style={{ borderRight: '1px solid #ccc' }} href="/posts/education">
						Education
					</a>
				</li>
			</ul>
		<div className="container-fluid mt-2" style={{width:"999px"}}>
			<div className="row">
				<div className="col-sm-12 col-md-6 col-lg-6 position-relative" style={{transform:"translateX(-4px)"}}>
					<h2>
							{latestdentail.slice(-3).reverse().map((p) => (
								<div
									key={p._id}
									className="col position-relative"
									style={{ transform: 'translateX(-30px)' }}
								>
								<MainBlogPosts post={p}
						width="499px"
						height="332.5px"
						fontSize="22px"
						
					/>
					</div>
							))}
						</h2>
				</div>
				<div className="col-sm-12 col-md-6 col-lg-6">
					<div className="row">
						<div className="col-sm-12 col-md-12 col-lg-12">
						
							<MainBlogPosts 
								
								width="100%"
								height="180px"
								fontSize="20px"
							/>
							
						</div>
						<div className="col-sm-12 col-md-12 col-lg-12 position-absolute" style={{top:"182.5px"}}>
							<div className="row position-relative">
								<div className="col-sm-12 col-md-6 col-lg-6">
									<MainBlogPosts
										width="107%"
										fontSize="12px"
										height="150px"
										imgSrc="https://images.unsplash.com/photo-1611564393146-2819eeb1f335?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80"
									/>
								</div>
								<div className="col-sm-12 col-md-6 col-lg-6" style={{transform:"translateX(-15px)"}}>
									<MainBlogPosts
										marginRight="5px"
										width="107%"
										fontSize="12px"
										height="150px"
										imgSrc="https://images.unsplash.com/photo-1611564393146-2819eeb1f335?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row mt-5" id="fsectitle" style={{transform:"translateY(-110px)"}}>
				<div className="col-sm-12 col-md-8 col-lg-8 d-inline">
					<div className="black-heading d-inline-block">
						<span style={{ backgroundColor: '#fcad03' }}>Don't Miss</span>
						<p className="d-inline">All</p>
					</div>
					<hr
						style={{
							border: '2px solid #fcad03',
							backgroundColor: '#fcad03',
							padding: '0px',
							margin: '0px'
						}}
					/>
					<div className="row">
						<div className="col-sm-12 col-md-6 col-lg-6 mt-3">
							<FeaturedBlog height="300px" />
						</div>
						<div className="col-sm-12 col-md-6 col-lg-6">
							{[ 0, 1, 2, 3 ].map((item) => {
								return <MostPopular />;
							})}
						</div>
					</div>
				</div>
				<div className="col-sm-12 col-md-4 col-lg-4">
					<div className="black-heading">
						<span>STAY CONNECTED</span>
					</div>
					<hr
						style={{ border: '2px solid black', backgroundColor: 'black', padding: '0px', margin: '0px' }}
					/>
					<SocialConnection Icon={<AiFillFacebook size={44} color="#3b5998" />} />
					<SocialConnection
						Icon={<AiFillYoutube size={44} color="#FF0000" />}
					
					/>
					<hr/>

					<div className="col-sm-12 col-md-6 col-lg-12">
							{[ 0, 1, 2, 3 ].map((item) => {
								return <MostPopular />;
							})}
						</div>

				</div>
			</div>
			<div className="row mt-1" id="ssectitle" style={{transform:"translateY(-290px)"}}>
				<div className="col-sm-12 col-md-8 col-lg-8">
					<div className="black-heading" >
						<span style={{ backgroundColor: 'green'}}>Don't Miss</span>
						<p>All</p>
					</div>
					<hr
						style={{
							border: '2px solid green',
							backgroundColor: 'green',
							padding: '0px',
							margin: '0px'
						}}
					/>

					<div className="row">
					
						<div className="col-sm-12 col-md-6 col-lg-6 mt-3">
							<FeaturedBlog height="300px" />
							<hr/>
							{[ 0, 1 ].map((i) => <MostPopular />)}
						</div>
						<div className="col-sm-12 col-md-6 col-lg-6 mt-3">
							<FeaturedBlog height="300px" />
							<hr/>
							{[ 0, 1 ].map((i) => <MostPopular />)}
						</div>
						
						<div className="col-sm-12 col-md-12 col-lg-12 mt-5" id="tsectitle">
							<div className="black-heading">
								<span style={{ backgroundColor: 'grey' }}>House Design</span>
								<p>All</p>
							</div>
							<hr
								style={{
									border: '2px solid grey',
									backgroundColor: 'grey',
									padding: '0px',
									margin: '0px'
								}}
							/>
							<div className="row mt-3 mb-0">
								<div className="col-sm-12 col-md-4 col-lg-4">
									<DesignHouse />
								</div>
								<div className="col-sm-12 col-md-4 col-lg-4">
									<DesignHouse />
								</div>
								<div className="col-sm-12 col-md-4 col-lg-4">
									<DesignHouse />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</>
	);
}

export default Main;
