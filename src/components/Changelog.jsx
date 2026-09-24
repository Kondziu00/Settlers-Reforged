import ChangelogEntry from './ChangelogEntry.jsx';
import './Changelog.css';

export const RELEASES = [
	{
		version: 'v1.0.0',
		date: 'czerwiec 2026',
		title: 'Pierwsze wydanie Reforged',
		items: ['Launcher, instalka'],
	},
];

export default function Changelog({ limit }) {
	const releases = limit ? RELEASES.slice(0, limit) : RELEASES;
	return (
		<div className='changelog'>
			{releases.map((r) => (
				<ChangelogEntry key={r.version} {...r} />
			))}
		</div>
	);
}
