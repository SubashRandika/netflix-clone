import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import env from 'react-dotenv';
import axios from '../../api/axios';
import './Row.styles.css';

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
	const [movies, setMovies] = useState([]);

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
			<div className='row__posters'>
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
			</div>
		</div>
	);
};

Row.propTypes = {
	title: PropTypes.string.isRequired,
	fetchUrl: PropTypes.string.isRequired,
	isLargeRow: PropTypes.bool
};

export default Row;
