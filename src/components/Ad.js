import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Image } from '../elements';

const Ad = () => {
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	};

	return (
		<>
		<Wrap>
				<Slider {...settings}>
					<div>
						<Image
                            is_width={'100%'}
                            is_height={'370px'}
                            is_position={'50% center'}
							alt="kurly1"
							src="https://img-cf.kurly.com/banner/main/pc/img/e66ae80e-90ac-4fb8-a7d6-bdeb1bbae2ed"
						/>
					</div>
					<div>
						<Image
                        is_width={'100%'}
                        is_height={'370px'}
                        is_position={'50% center'}
							alt="kurly2"
							src="https://img-cf.kurly.com/banner/main/pc/img/f607797b-c11f-45d8-919b-68a7d2d4581b"
						/>
					</div>
					<div>
						<Image
                        is_width={'100%'}
                        is_height={'370px'}
                        is_position={'50% center'}
							alt="kurly3"
							src="https://img-cf.kurly.com/banner/main/pc/img/e98407c8-6242-4660-be4c-eb33b2223eb6"
						/>
					</div>
                    <div>
						<Image
                        is_width={'100%'}
                        is_height={'370px'}
                        is_position={'50% center'}
							alt="kurly4"
							src="https://img-cf.kurly.com/banner/main/pc/img/aeb07faf-fe19-4d85-acbd-fbcc1e0adafc"
						/>
					</div>
                    <div>
						<Image
                        is_width={'100%'}
                        is_height={'370px'}
                        is_position={'50% center'}
							alt="kurly5"
							src="https://img-cf.kurly.com/banner/main/pc/img/71c2d383-b53a-445b-85c7-1a9931fcea43"
						/>
					</div>
                    <div>
						<Image
                        is_width={'100%'}
                        is_height={'370px'}
                        is_position={'50% center'}
							alt="kurly6"
							src="https://img-cf.kurly.com/banner/main/pc/img/31df528e-ad56-40d6-921e-c6d129f9ac20"
						/>
					</div>
                    <div>
						<Image
                        is_width={'100%'}
                        is_height={'370px'}
                        is_position={'50% center'}
							alt="kurly7"
							src="https://img-cf.kurly.com/banner/main/pc/img/0455ad68-bc30-4df8-9c9a-6687f9c8eae2"
						/>
					</div>
                    <div>
						<Image
                        is_width={'100%'}
                        is_height={'370px'}
                        is_position={'50% center'}
							alt="kurly8"
							src="https://img-cf.kurly.com/banner/main/pc/img/33fd993f-2fcd-45ce-9409-131a4d9b2f4b"
						/>
					</div>
                    <div>
						<Image
                        is_width={'100%'}
                        is_height={'370px'}
                        is_position={'50% center'}
							alt="kurly9"
							src="https://img-cf.kurly.com/banner/main/pc/img/72a90f92-861a-47fd-bd79-830ff2fd7756"
						/>
					</div>
                    <div>
						<Image
                        is_width={'100%'}
                        is_height={'370px'}
                        is_position={'50% center'}
							alt="kurly10"
							src="https://img-cf.kurly.com/banner/main/pc/img/ab2389bf-5bef-4886-b1f8-8696ddd309b3"
						/>
					</div>
                    
				</Slider>
			</Wrap>
		</>
	);
};

const Wrap = styled.div`
	width: 100%;
    min-width : 1050px;
    max-width : 1900px;
    margin : 0 auto;
`;
export default Ad;