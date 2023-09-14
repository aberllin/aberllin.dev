import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navigation from './components/molecules/Navigation';
import Portfolio from './Pages/Portfolio';
import Blog from './Pages/Blog';
import Home from './Pages/Home';
import Resources from './Pages/Resources';

const App: React.FC = () => (
	<BrowserRouter>
		<Navigation />
		<Routes>
			<Route path="/portfolio" element={<Portfolio />} />
			<Route path="/blog" element={<Blog />} />
			<Route path="/resources" element={<Resources />} />
			<Route path="/" element={<Home />} />
		</Routes>
	</BrowserRouter>
);

export default App;