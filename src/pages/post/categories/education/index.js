import React from 'react';
import './style.scss';
import { MdDateRange } from 'react-icons/md';
import { AiOutlineComment, AiFillLinkedin, AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';

const MainBlogPosts = ({ height, width, fontSize, imgSrc }) => {
	return (
		<div className="main-blog-posts" style={{ padding: '2px' }}>
			<img width={width} height={height} src={imgSrc} alt="source" />
			<div className="inside-hero-image1">
				<h5>Heading</h5>
				<div>
					<h2 style={{ fontSize: fontSize }}>
						Lorem Ipsum is simply dummy text <br /> of the printing
					</h2>
					<span>
						By : Someone <MdDateRange /> March 12,2017 <AiOutlineComment /> 4
					</span>
				</div>
			</div>
		</div>
	);
};

const FeaturedBlog = ({ height }) => {
	return (
		<div>
			<div className="featured-card1 mt-2">
				<img
					width="100%"
					height={height}
					src="https://images.unsplash.com/photo-1611338522368-3fccf11b4afd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
					alt=" source"
				/>
				<div className="featured-card-overly">
					<p>Develop</p>
				</div>
			</div>
			<div>
				<h3>Here is heading</h3>
			</div>
		</div>
	);
};
const FeaturedBlogBottom = () => {
	return (
		<div className="shadow p-1 mb-5 bg-white rounded">
			<div className="featured-card">
				<img
					width="100%"
					src="https://images.unsplash.com/photo-1611338522368-3fccf11b4afd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
					alt=" source"
				/>
				<div className="featured-card-overly">
					<p>Develop & design</p>
				</div>
			</div>
			<div style={{ padding: '5px' }}>
				<h3>Here is heading</h3>
			</div>
		</div>
	);
};


const MostPopular = () => {
	return (
		<div className="most-popular mt-2">
			<div>
				<img
					width="120px"
					height="100px"
					src="https://images.unsplash.com/photo-1611338522368-3fccf11b4afd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
					alt=" source"
				/>
			</div>
			<div>
				<p>Here is heading about the post blog</p>
				<span>August 9,2020</span>
			</div>
		</div>
	);
};

const MiddleBlog = () => {
	return (
		<div className="most-popular mt-2">
			<div>
				<img
					width="350px"
					src="https://images.unsplash.com/photo-1611338522368-3fccf11b4afd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
					alt=" source"
				/>
			</div>
			<div>
				<p style={{ fontSize: '25px', fontStyle: 'italic', fontWeight: 'lighter' }}>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
					industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
					and scrambled it to make a type specimen book.{' '}
				</p>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<div style={{marginLeft:'10px'}}>
						Share <AiFillFacebook color="red" size={20} /> <SiGmail color="red" size={20} />{' '}
						<AiFillLinkedin color="red" size={20} /> <AiFillTwitterSquare color="red" size={20} />
					</div>
					<div style={{marginRight:'10px'}}>
					<span style={{ backgroundColor: 'black', color: 'white', padding: '5px 10px' }}>Read More</span>
					</div>
				</div>
			</div>
		</div>
	);
};

function Education() {
	return (
		<div className="container-fluid" style={{width:"999px"}}>
			<div style={{ display: 'flex' }}>
				<div className="">
					<MainBlogPosts
						width="780px"
						height="550px"
						imgSrc="https://images.unsplash.com/photo-1611564393146-2819eeb1f335?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80"
					/>
				</div>
				<div >
					<div >
						<div >
							<MainBlogPosts
								width="100%"
								fontSize="25px"
								height="280px"
								imgSrc="https://images.unsplash.com/photo-1611564393146-2819eeb1f335?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80"
							/>
						</div>
						<div style={{ display: 'flex' }}>
							<div>
								<MainBlogPosts
									width="100%"
									fontSize="20px"
									imgSrc="https://images.unsplash.com/photo-1611564393146-2819eeb1f335?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80"
								/>
							</div>
							<div>
								<MainBlogPosts
									width="100%"
									fontSize="20px"
									imgSrc="https://images.unsplash.com/photo-1611564393146-2819eeb1f335?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col-sm-12 col-md-8 col-lg-8">
					<div className="black-heading">
						<span>Music</span>
						<p>Show more</p>
					</div>
					<hr
						style={{ border: '2px solid black', backgroundColor: 'black', padding: '0px', margin: '0px' }}
					/>
					<div className="row">
						<div className="col-sm-12 col-md-6 col-lg-6">
							<FeaturedBlog height="200px" />
						</div>
						<div className="col-sm-12 col-md-6 col-lg-6">
							<FeaturedBlog height="200px" />
						</div>
					</div>
				</div>
				<div className="col-sm-12 col-md-4 col-lg-4">
					<div className="black-heading">
						<span>Follow</span>
					</div>
					<hr
						style={{ border: '2px solid black', backgroundColor: 'black', padding: '0px', margin: '0px' }}
					/>
					<FeaturedBlog height="200px" />
				</div>
			</div>
			<div className="row">
				<div className="col-sm-12 col-md-8 col-lg-8">
				<h1>This is going to be the another post</h1>
					<MiddleBlog />
					<h1>This is going to be the another post</h1>
					<MiddleBlog />
					<div className="row">
				<div className="col-sm-12 col-md-4 col-lg-4"><FeaturedBlogBottom /></div>
				<div className="col-sm-12 col-md-4 col-lg-4"><FeaturedBlogBottom /></div>
				<div className="col-sm-12 col-md-4 col-lg-4"><FeaturedBlogBottom /></div>
			</div>
				</div>
				<div className="col-sm-12 col-md-4 col-lg-4">
					<span style={{ backgroundColor: 'black', color: 'white', padding: '5px 10px' }}>Most Popular</span>
					<hr style={{ margin: '3px', padding: '0px' }} />
					{[ 1, 2, 3, 4, 5, 6 ].map((most) => {
						return <MostPopular />;
					})}
				</div>
			</div>
			
		</div>
	);
}

export default Education;
