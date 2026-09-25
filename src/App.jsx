import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import DownloadPage from './pages/DownloadPage.jsx';
import ChangelogPage from './pages/ChangelogPage.jsx';
import FaqPage from './pages/FaqPage.jsx';
import './App.css';

export default function App() {
	return (
		<div className='app'>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/pobierz' element={<DownloadPage />} />
					<Route path='/historia-zmian' element={<ChangelogPage />} />
					<Route path='/faq' element={<FaqPage />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}
