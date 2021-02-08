import React, { useState, useEffect, Component } from 'react';
import laptop from '../../../../images/laptop.png';
import { useSelector, useDispatch } from 'react-redux';
import { MdDateRange } from 'react-icons/md';
import { getPostsByCount, fetchPostsByFilter } from '../../../../functions/post';
import {AiOutlineComment} from 'react-icons/ai';

const MainBlogPosts = ({ post, right, height, width, fontSize }) => {
	
    const { images, title, description, slug } = post;
	return (
		<div className="mn-blg-pst" style={{ padding: '2px'}}>
			<img right={right} width={width} height={height}  
            src={images && images.length ? images[0].url : laptop} 
            alt="source" />
			<div className="nsd-hr-img  ml-2" 
			style={{transform:"translateY(-120%)"}}>
				<div>
					<h2 style={{color: 'white', fontSize: fontSize }}>
						Lorem Ipsum is simply dummy text of the printing
					</h2>
					<span style={{color: 'white'}}>
						By : Someone <MdDateRange /> March 12,2017 <AiOutlineComment /> 4
					</span>
				</div>
			</div>
		</div>
	);
};
export default MainBlogPosts;