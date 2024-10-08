import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

import Home from './pages/Home';

const Main = () => (
	<BrowserRouter basename='/'>
		<Routes>
			<Route path='/' Component={Home}></Route>
		</Routes>
	</BrowserRouter>
);

export default Main;