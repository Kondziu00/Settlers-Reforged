import { useState } from 'react';
import './FaqItem.css';

export default function FaqItem({ question, answer }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={`faq-item ${isOpen ? 'open' : ''}`}>
			<button className='faq-question' onClick={() => setIsOpen(!isOpen)}>
				<span>{question}</span>
				<span className='faq-icon'>{isOpen ? '–' : '+'}</span>
			</button>

			<div className='faq-answer'>
				<p>{answer}</p>
			</div>
		</div>
	);
}
