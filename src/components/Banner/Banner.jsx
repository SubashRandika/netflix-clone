import React, { useEffect, useState } from 'react';
import env from 'react-dotenv';
import axios from '../../api/axios';
import { truncate } from '../../utils/stringUtils';
import requests from '../../api/endpoints';
import './Banner.styles.css';

const Banner = () => {
	const [bannerMovie, setBannerMovie] = useState([]);

	useEffect(() => {
		const fetchBannerMovie = async () => {
			const request = await axios.get(requests.fetchNetflixOriginals);
			const randomMovieIndex = Math.floor(
				Math.random() * request.data.results.length - 1
			);

			setBannerMovie(request.data.results[randomMovieIndex]);

			return request;
		};

		fetchBannerMovie();
	}, []);

	return (
		<header
			className='banner'
			style={{
				backgroundSize: 'cover',
				backgroundImage: `url("${env.TMDB_IMAGE_BASE_URL}${bannerMovie?.backdrop_path}")`,
				backgroundPosition: 'center top'
			}}
		>
			<div className='banner__container'>
				<h1 className='banner__title'>
					{bannerMovie?.title ||
						bannerMovie?.name ||
						bannerMovie?.original_name}
				</h1>
				<div className='banner__buttons'>
					<button className='banner__button'>Play</button>
					<button className='banner__button'>My List</button>
				</div>
				<h1 className='banner__description'>
					{truncate(bannerMovie?.overview, 150)}
				</h1>
			</div>
			<div className='banner--fadeBottom' />
		</header>
	);
};

export default Banner;
