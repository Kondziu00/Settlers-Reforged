import FaqItem from './FaqItem.jsx';
import './Faq.css';

export const FAQ_ITEMS = [
	{
		question: 'Czy potrzebuję oryginalnej gry?',
		answer:
			'Tak. Settlers Reforged jest nakładką techniczną i nie zawiera plików gry — instalator wykrywa istniejącą kopię Osadników IV i nakłada na nią poprawki.',
	},
	{
		question: 'Czy zepsuje to moje zapisane gry?',
		answer:
			'Nie. Format zapisu pozostaje bez zmian, więc możesz w dowolnym momencie wrócić do oryginalnej wersji gry i wczytać te same zapisy.',
	},
];

export default function Faq() {
	return (
		<div>
			{FAQ_ITEMS.map((item) => (
				<FaqItem key={item.question} {...item} />
			))}
		</div>
	);
}
