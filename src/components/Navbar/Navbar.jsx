import React, { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import { ReactComponent as Avatar } from '../../assets/avatar.svg';
import './Navbar.styles.css';

const Navbar = () => {
	const [showNavbar, setShowNavbar] = useState(false);

	const handleShowNavbar = () => {
		if (window.scrollY > 100) {
			setShowNavbar(true);
		} else {
			setShowNavbar(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleShowNavbar);

		return () => window.removeEventListener('scroll', handleShowNavbar);
	}, []);

	return (
		<div className={`navbar ${showNavbar && 'navbar__bg'}`}>
			<div className='navbar__container'>
				<Logo />
				<Avatar className='navbar__avatar' />
			</div>
		</div>
	);
};

export default Navbar;
