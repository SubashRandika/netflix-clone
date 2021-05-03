import React from 'react';
import { truncate } from '../../utils/stringUtils';
import './Banner.styles.css';

const Banner = () => {
	return (
		<header
			className='banner'
			style={{
				backgroundSize: 'cover',
				backgroundImage: `url("https://www.allspark.com/content/wp-content/uploads/2020/07/tfwfc-banner.jpg")`,
				backgroundPosition: 'center center'
			}}
		>
			<div className='banner__container'>
				<h1 className='banner__title'>Movie Name</h1>
				<div className='banner__buttons'>
					<button className='banner__button'>Play</button>
					<button className='banner__button'>My List</button>
				</div>
				<h1 className='banner__description'>
					{truncate(
						`This is a test description This is a test description This is a test
					description This is a test descriptionThis is a test description This
					is a test description This is a test description This is a test
					description This is a test description This is a test description This
					is a test description This is a test description This is a test
					description This is a test description This is a test description This
					is a test description This is a test description This is a test
					description This is a test description This is a test description`,
						150
					)}
				</h1>
			</div>
			<div className='banner--fadeBottom' />
		</header>
	);
};

export default Banner;
