import { Link } from 'react-router-dom';
import { CONFIG } from '../config.js';
import "./Footer.css";

export default function Footer() {
	const repoUrl = `https://github.com/${CONFIG.GITHUB_REPO}`;

	return (
		<footer>
			<div className='wrap footer-grid'>
				<div>
					<div className='brand'>
						<svg
							width='22'
							height='22'
							viewBox='0 0 26 26'
							fill='none'
							aria-hidden='true'>
							<path
								d='M13 2 L23 8 V18 L13 24 L3 18 V8 Z'
								stroke='#c89b3c'
								strokeWidth='1.4'
							/>
						</svg>
						Settlers Reforged
					</div>
					<p
						style={{
							color: 'var(--stone)',
							fontSize: '0.9rem',
							maxWidth: '40ch',
						}}>
						Projekt społecznościowy, niezwiązany z Blue Byte ani Ubisoft.
						Osadnicy IV to własność ich odpowiednich twórców.
					</p>
				</div>
				<div className='footer-links'>
					<a href={repoUrl} target='_blank' rel='noreferrer'>
						Kod źródłowy
					</a>
					<a href={`${repoUrl}/issues`} target='_blank' rel='noreferrer'>
						Zgłoś błąd
					</a>
					<a href='#' onClick={(e) => e.preventDefault()}>
						Discord
					</a>
					<Link to='/historia-zmian'>Historia zmian</Link>
				</div>
			</div>
			<div className='wrap footer-fine'>
				© {new Date().getFullYear()} Settlers Reforged
			</div>
		</footer>
	);
}
