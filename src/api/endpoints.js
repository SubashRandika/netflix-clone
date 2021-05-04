import env from 'react-dotenv';

const API_KEY = env.TMDB_API_KEY;
const LANGUAGE_LOCALE = 'en-US';

const requests = {
	fetchWeekTrending: `/trending/all/week?api_key=${API_KEY}&language=${LANGUAGE_LOCALE}`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=${LANGUAGE_LOCALE}`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`
};

export default requests;
