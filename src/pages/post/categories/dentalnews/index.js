import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import './style.scss';

const TradingImageLeftAndRight = () => {
	return (
		<div className="trading-img">
			<img
				width="100%"
				src="https://images.unsplash.com/photo-1611327874895-af173dfe0e54?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=952&q=80"
				alt=" source"
			/>
			<div className="image-overly">
				<h4>Here is Title of the Blog Here is Title of the Blog Here is Title of the Blog</h4>
				<div>
					<p>World</p>
					<span>Writer</span>
					<span style={{ color: 'white' }}>Date</span>
				</div>
			</div>
		</div>
	);
};

const TradingImageCenter = () => {
	return (
		<div className="trading-img">
			<img
				width="100%"
				src="https://images.unsplash.com/photo-1611327874895-af173dfe0e54?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=952&q=80"
				alt=" source"
			/>
			<div className="image-overly-center">
				<h1>Here is Title of the Blog Here is Title of the Blog Here is Title of the Blog</h1>
				<div>
					<p>World</p>
					<span>Writer</span>
					<span style={{ color: 'white' }}>Date</span>
				</div>
			</div>
		</div>
	);
};

const FeaturedBlog = () => {
	return (
		<div className="shadow p-1 bg-white rounded">
			<div className="featured-card">
				<img
					width="100%"
					src="https://images.unsplash.com/photo-1611338522368-3fccf11b4afd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
					alt=" source"
				/>
				<div className="featured-card-overly1">
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
		<div className="most-popular">
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

function DentalNews() {
	return (
		<div className="container-fluid" style={{width:"999px"}}>
			<div className="row">
				<div className="col-12">
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<div style={{ display: 'flex' }}>
							<p className="trading-p">Trending Now</p>
							<span className="trading-span">Some text here</span>
						</div>
						<div>
							<button className="button">
								<AiOutlineLeft size={12} />
							</button>
							<button className="button">
								<AiOutlineRight size={12} />
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-12 col-md-3 col-lg-3">
					<TradingImageLeftAndRight />
					<TradingImageLeftAndRight />
				</div>
				<div className="col-sm-12 col-md-6 col-lg-6">
					<TradingImageCenter />
				</div>
				<div className="col-sm-12 col-md-3 col-lg-3">
					<TradingImageLeftAndRight />
					<TradingImageLeftAndRight />
				</div>
			</div>
			<div className="row mt-4">
				<div className="col-sm-12 col-md-9 col-lg-9">
					<div className="row">
						<div className="col-sm-12 col-md-4 col-lg-4">
							<FeaturedBlog />
						</div>
						<div className="col-sm-12 col-md-4 col-lg-4">
							<FeaturedBlog />
						</div>
						<div className="col-sm-12 col-md-4 col-lg-4">
							<FeaturedBlog />
						</div>
					</div>
					<div className="row">
						<div className="col-sm-12 col-md-4 col-lg-4">
							<FeaturedBlog />
						</div>
						<div className="col-sm-12 col-md-4 col-lg-4">
							<FeaturedBlog />
						</div>
						<div className="col-sm-12 col-md-4 col-lg-4">
							<FeaturedBlog />
						</div>
					</div>
				</div>
				<div className="col-sm-12 col-md-3 col-lg-3">
					<h5 style={{ backgroundColor: 'black', color: 'white', padding: '5px 10px', marginRight: '150px' }}>
						Most Popular
					</h5>
					<hr />
					{[ 1, 2, 3, 4 ].map((most) => {
						return <MostPopular />;
					})}
				</div>
			</div>
		</div>
	);
}

export default DentalNews;
