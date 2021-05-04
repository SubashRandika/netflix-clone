import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import env from 'react-dotenv';
import Carousel from 'react-multi-carousel';
import axios from '../../api/axios';
import 'react-multi-carousel/lib/styles.css';
import './Row.styles.css';

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
	const [movies, setMovies] = useState([]);

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 2000, min: 1450 },
			items: isLargeRow ? 10 : 9
		},
		desktop: {
			breakpoint: { max: 1449, min: 950 },
			items: 9
		},
		tablet: {
			breakpoint: { max: 949, min: 550 },
			items: isLargeRow ? 5 : 4
		},
		mobile: {
			breakpoint: { max: 549, min: 0 },
			items: isLargeRow ? 3 : 2
		}
	};

	useEffect(() => {
		const fetchGenreMovies = async () => {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		};

		fetchGenreMovies();
	}, [fetchUrl]);

	return (
		<div className='row'>
			<h2>{title}</h2>
			<Carousel className='row__posters' responsive={responsive}>
				{movies.map(
					(movie) =>
						((isLargeRow && movie?.poster_path) ||
							(!isLargeRow && movie?.backdrop_path)) && (
							<img
								key={movie?.id}
								className={`row__poster ${isLargeRow && 'row__largePoster'}`}
								src={`${env.TMDB_IMAGE_BASE_URL}${
									isLargeRow ? movie?.poster_path : movie?.backdrop_path
								}`}
								alt={movie?.name}
							/>
						)
				)}
			</Carousel>
		</div>
	);
};

Row.propTypes = {
	title: PropTypes.string.isRequired,
	fetchUrl: PropTypes.string.isRequired,
	isLargeRow: PropTypes.bool
};

export default Row;
