import React from 'react';
import Banner from '../../components/Banner/Banner';
import Navbar from '../../components/Navbar/Navbar';
import './Home.styles.css';

const Home = () => {
	return (
		<div className='home'>
			<Navbar />
			<Banner />

			{/* Rows */}
		</div>
	);
};

export default Home;
