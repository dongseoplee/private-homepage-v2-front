import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './NavBar/NavBar';
import MainPage from './MainPage/MainPage';
import Footer from './Footer/Footer';

function Router() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<MainPage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default Router;
