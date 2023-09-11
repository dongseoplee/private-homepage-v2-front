/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.scss';
import prevImage from '../../images/arrows/prevArrow.svg';
import rudwn1 from '../../images/profile/profile1.jpg';
import rudwn2 from '../../images/profile/profile2.jpg';
import rudwn3 from '../../images/profile/profile3.jpg';

import dong1 from '../../images/profile/dong1.jpg';
import dong2 from '../../images/profile/dong2.jpg';
import dong3 from '../../images/profile/dong3.jpg';
import dong4 from '../../images/profile/dong4.jpg';

// import secret_info from 'reactfront/src/images/profile/secret_info.jpg';
// import secret_info2 from 'reactfront/src/images/profile/secret_info2.jpg';
// import secret_info3 from 'reactfront/src/images/profile/secret_info3.jpg';

const ImageCarousel = ({ user }) => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		if (user === 1) {
			setImages([
				{
					id: 1,
					src: dong2,
					// src: secret_info,
					alt: 'pr1',
				},
				{
					id: 2,
					src: dong3,
					// src: secret_info2,
					alt: 'pr2',
				},
				{
					id: 3,
					src: dong4,
					// src: secret_info3,
					alt: 'pr3',
				},
			]);
		} else if (user === 2) {
			setImages([
				{
					id: 1,
					src: rudwn1,
					alt: 'pr1',
				},
				{
					id: 2,
					src: rudwn2,
					alt: 'pr2',
				},
				{
					id: 3,
					src: rudwn3,
					alt: 'pr3',
				},
			]);
		}
	}, [user]);

	const carousel = useRef();
	const settings = {
		arrows: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		pointOnHover: true,
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000,
		fade: true,

		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};

	function NextArrow(props) {
		const { style, onClick } = props;
		return (
			<div onClick={onClick}>
				<img className="nextButton" src={prevImage} />
			</div>
		);
	}

	function PrevArrow(props) {
		const { style, onClick } = props;
		return (
			<div onClick={onClick}>
				<img className="prevButton" src={prevImage} style={{ transform: 'rotate(180deg)' }} />
			</div>
		);
	}

	return (
		<div className="image-slider">
			<Slider {...settings} ref={carousel}>
				{images.map(item => (
					<div key={item.id}>
						<img className="profile-image" src={item.src} />
					</div>
				))}
			</Slider>
		</div>
	);
};

export default ImageCarousel;
