import React from 'react';
import './CSS.css';
import Carta from './imagens/card.jpg';

const Card = ({ card, onClick }) => {
	return (
		<div className="card" onClick={() => onClick(card)}>
			{card.isFlipped ? (
				<img src={card.image} alt={card.name} />
			) : (
				<img src={Carta} alt="Card de costas" />
			)}
		</div>
	);
};

export default Card;

