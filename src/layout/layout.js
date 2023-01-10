import React from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';
import Footer from './footer';
import Navbar from '../components/ui/nav';

const LandingLayout = () => {
	return (
		<Box>
			<Navbar/>
			<Outlet/>
			<Footer/>
		</Box>
	)
}

export default LandingLayout