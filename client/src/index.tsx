import React from 'react';
import ReactDOM from 'react-dom/client';

import Routing from './Routing';
import reportWebVitals from './reportWebVitals';

import './css/index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<Routing />
	</React.StrictMode>
);

reportWebVitals();