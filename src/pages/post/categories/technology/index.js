import React from 'react';
import { MdDateRange } from 'react-icons/md';
import { AiOutlineComment } from 'react-icons/ai';
import './style.scss';

const MostPopular = ({ height, width, fontSize }) => {
	return (
		<div className="most-popular">
			<div>
				<img
					width={width}
					height={height}
					src="https://images.unsplash.com/photo-1611338522368-3fccf11b4afd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
					alt=" source"
				/>
			</div>
			<div>
				<p style={{ fontSize: fontSize }}>Here is heading about the post blog</p>
				<span style={{ fontSize: '14px' }}>
					<MdDateRange /> March 12,2017 <AiOutlineComment /> 4
				</span>
			</div>
		</div>
	);
};

const FeaturedBlog = () => {
	return (
		<div className="shadow p-1 mb-5 bg-white rounded">
			<div className="featured-card">
				<img
					width="100%"
					src="https://images.unsplash.com/photo-1611338522368-3fccf11b4afd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
					alt=" source"
				/>
			</div>
			<div style={{ padding: '5px' }}>
                <h3>Here is heading</h3>
                <span style={{ fontSize: '14px' }}>
					<MdDateRange /> March 12,2017 <AiOutlineComment /> 4
				</span>
			</div>
		</div>
	);
};

function Technology() {
	return (
		<div className="container-fluid" style={{width:"999px"}}>
			<div className="row">
				<div className="col-12">
					<div className="hero-image">
						<img
							width="100%"
							height="460px"
							src="https://images.unsplash.com/photo-1515940175183-6798529cb860?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1187&q=80"
							alt="source"
						/>
						<hr className="colored" />
						<div className="inside-hero-image">
							<h2>Heading in of the blogs that posted</h2>
							<div>
								<span>
									<MdDateRange /> March 12,2017 <AiOutlineComment /> 4
								</span>
								<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy text ever since the 1500s, when an
									unknown printer took a galley of type and scrambled it to make a type specimen book.
									It has survived not only five centuries, but also the leap into electronic
									typesetting, remaining essentially unchanged
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-12 col-md-9 col-lg-9">
					<div className="row">
						<div className="col-6">
							<div className="post-heading">
								<span>Technology</span>
							</div>
							<MostPopular height="150px" width="180px" fontSize="25px" />
							<MostPopular height="150px" width="180px" fontSize="25px" />
							<MostPopular height="150px" width="180px" fontSize="25px" />
						</div>
						<div className="col-6">
							<div className="post-heading">
								<span>Technology</span>
							</div>
							<MostPopular height="150px" width="180px" fontSize="25px" />
							<MostPopular height="150px" width="180px" fontSize="25px" />
							<MostPopular height="150px" width="180px" fontSize="25px" />
                        </div>
                        <div className="col-12">
                        <div className="post-heading">
								<span>Technology</span>
                            </div>
                            <div className="row">
                                <div className="col-4"><FeaturedBlog /></div>
                                <div className="col-4"><FeaturedBlog /></div>
                                <div className="col-4"><FeaturedBlog  /></div>
                            </div>
                        </div>
					</div>
				</div>
				<div className="col-sm-12 col-md-3 col-lg-3">
					<h5 style={{ backgroundColor: 'black', color: 'white', padding: '5px 10px', marginRight: '150px' }}>
						Most Popular
					</h5>
					<hr />
					{[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ].map((most) => {
						return <MostPopular height="120px" width="120px" fontSize="12px" />;
					})}
				</div>
			</div>
		</div>
	);
}

export default Technology;
