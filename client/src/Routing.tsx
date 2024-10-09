import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import News from './pages/News';
import Rules from './pages/Rules';

const Main = () => (
	<BrowserRouter basename='/'>
		<Routes>
			<Route path='/' Component={Home}></Route>
			<Route path='/news' Component={News}></Route>
			<Route path='/rules' Component={Rules}></Route>
		</Routes>
	</BrowserRouter>
);

export default Main;