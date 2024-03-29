import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

import Slide1 from '../../static/images/banner/slide1.png';
import Slide2 from '../../static/images/banner/slide2.png';
import Slide3 from '../../static/images/banner/slide3.png';

const items = [
	{
		id: 1,
		src: { Slide1 },
		altText: 'DENTAL IMAGING',
		caption: 'PORTAL'
	},
	{
		id: 2,
		src: { Slide2 },
		altText2: 'CLASSIFIEDS',
		caption2: 'PORTAL'
	},
	{
		id: 3,
		src: { Slide3 },
		altText: 'Blog - SOON!',
		caption: 'DENTAL IMAGING'
	}
];

const Banner = (props) => {
	const [ activeIndex, setActiveIndex ] = useState(0);
	const [ animating, setAnimating ] = useState(false);

	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};

	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};

	const goToIndex = (newIndex) => {
		if (animating) return;
		setActiveIndex(newIndex);
	};

	const slides = items.map((item) => {
		if (item.id === 1) {
			return (
				<CarouselItem
					className="customtag"
					tag="div"
					key={item.id}
					onExiting={() => setAnimating(true)}
					onExited={() => setAnimating(false)}
					style={{ maxHeight: '300px' }}
				>
					<CarouselCaption
						className="caption fadeIn fadeInLeft"
						captionTitle={item.title}
						captionText={item.altText}
						captionHeader={item.caption}
					/>
					<p className="text fadeIn fadeInLeft">
						Welcome to <strong>DENTAL04</strong> - A service, information and classifieds in <br /> dental
						imaging
					</p>

					<img className="img" style={{ minHeight: '500px', maxHeight: '800px' }} src={Slide1} alt={item.altText} />
				</CarouselItem>
			);
		} else if (item.id === 2) {
			return (
				<CarouselItem
					className="customtag"
					tag="div"
					key={item.id}
					onExiting={() => setAnimating(true)}
					onExited={() => setAnimating(false)}
					style={{ maxHeight: '300px' }}
				>
					<CarouselCaption
						className="caption fadeIn fadeInRight text-right"
						captionTitle={item.title2}
						captionText={item.altText2}
						captionHeader={item.caption2}
					/>
					<p className="text2 fadeIn fadeInRight text-right" style={{ marginLeft: '95px' }}>
						Check out the used dental items and units <br /> for dental clinic and office.
					</p>
					<button type="button" className=" button2 btn btn-success fadeInRight">
						<a href="/shop">Check out</a>
					</button>
					<img className="img" style={{ minHeight: '500px', maxHeight: '800px' }} src={Slide2} alt={item.altText} />
				</CarouselItem>
			);
		} else {
			return (
				<CarouselItem
					className="customtag"
					tag="div"
					key={item.id}
					onExiting={() => setAnimating(true)}
					onExited={() => setAnimating(false)}
					style={{ maxHeight: '300px' }}
				>
					<CarouselCaption
						className="caption fadeIn fadeInLeft text-white"
						captionTitle={item.title}
						captionText={item.altText}
						captionHeader={item.caption}
					/>
					<p className="text fadeIn fadeInLeft text-white">
						{' '}
						Read our articles and news about dental imaging
					</p>
					<button type="button" className="button3 btn btn-success fadeInLeft">
						<a>Check out</a>
					</button>
					<img className="img" style={{minHeight: '500px', maxHeight: '800px' }} src={Slide3} alt={item.altText} />
				</CarouselItem>
			);
		}
	});

	return (
		<div>
			<style>
				{`.customtag {
              max-width: 100%;
              height: 400px;
              background-color: transparent;
            }
            
            .img {
              height: 100%;
              width: 100%;
            }
            
            .button {
              position: absolute;
              background-color:#001f24;
              margin-top: 8%;
              margin-left: 15.3%;
            }

            .button2 {
              float:right;
              position:absolute;
              background-color:#001f24;
              font-weight: 500; 
              margin-top: 14%;
              margin-left: 79.0%;
            }

            .button3 {
              position: absolute;
              background-color:#001f24;
              margin-top: 10%;
              margin-left: 15.0%;
            }

            .caption {
              font-size:30px; 
              font-weight: 700; 
              position: absolute; 
              color:#001f24;
              margin-bottom: 170px;
              text-align: left;
            }
            
            
            .text {
              position:absolute;
              color:#001f24;
              font-weight: 500; 
              margin-top: 13%;
              padding-left: 15.0%;
              z-index:1;
            }

            .text2 {
              float:right;
              position:absolute;
              color:#001f24;
              font-weight: 500; 
              margin-top: 10%;
              padding-left: 66.0%;
              z-index:1;
            }

            
            .fadeIn {-webkit-animation-name: fadeIn; animation-name: fadeIn; -webkit-animation-duration: 1s; animation-duration: 8s;
              -webkit-animation-fill-mode: both; animation-fill-mode: both;}
              
              @-webkit-keyframes fadeIn {0% {opacity: 0;}100% {opacity: 1;}}
              
              @keyframes fadeIn {0% {opacity: 0;}100% {opacity: 1;}} 

          .fadeInLeft {-webkit-animation-name: fadeInLeft; animation-name: fadeInLeft; -webkit-animation-duration: 3.5s; animation-duration: 3s;
              -webkit-animation-fill-mode: both; animation-fill-mode: both;}
          
              @-webkit-keyframes fadeInLeft {0% {opacity: 0; -webkit-transform: translate3d(-100%, 0, 0); transform: translate3d(-100%, 0, 0);}
              100% {opacity: 1; -webkit-transform: none; transform: none;}}
          
              @keyframes fadeInLeft {0% { opacity: 0; -webkit-transform: translate3d(-100%, 0, 0); transform: translate3d(-100%, 0, 0);}100% {
              opacity: 1; -webkit-transform: none; transform: none;
              }} 

          .fadeInRight {-webkit-animation-name: fadeInRight; animation-name: fadeInRight; -webkit-animation-duration: 3.5s;
              animation-duration: 3s; -webkit-animation-fill-mode: both; animation-fill-mode: both; }
              
              @-webkit-keyframes fadeInRight { 0% { opacity: 0; -webkit-transform: translate3d(100%, 0, 0); transform: translate3d(100%, 0, 0);
              } 100% { opacity: 1; -webkit-transform: none; transform: none; } } 
              
              @keyframes fadeInRight { 0% { opacity: 0; -webkit-transform: translate3d(100%, 0, 0);
              transform: translate3d(100%, 0, 0); }100% { opacity: 1; -webkit-transform: none; transform: none; }
              } 

            `}
			</style>
			<Carousel interval={20000000} activeIndex={activeIndex} next={next} previous={previous}>
					{slides}
				<CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
				<CarouselControl direction="next" directionText="Next" onClickHandler={next} />
			</Carousel>
		</div>
	);
};

export default Banner;
