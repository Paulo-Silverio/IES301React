import React, { useState, useEffect } from 'react';
import Card from './card';
import viuvanegra from './imagens/viuvanegra.jpg';
import hulk from './imagens/hulk.jpg';
import thor from './imagens/thor.jpg';
import capitaoamerica from './imagens/capitaoamerica.jpeg';
import homemdeferro from './imagens/homemdeferro.jpg'
import homemaranha from './imagens/homemaranha.jpg'

const Board = () => {
	const [cards, setCards] = useState([
		{ id: 1, name: 'Card 1', image: viuvanegra, isFlipped: false },
		{ id: 2, name: 'Card 2', image: hulk, isFlipped: false },
		{ id: 3, name: 'Card 3', image: thor, isFlipped: false },
		{ id: 4, name: 'Card 4', image: capitaoamerica, isFlipped: false },
		{ id: 5, name: 'Card 5', image: viuvanegra, isFlipped: false },
		{ id: 6, name: 'Card 6', image: hulk, isFlipped: false },
		{ id: 7, name: 'Card 7', image: thor, isFlipped: false },
		{ id: 8, name: 'Card 8', image: capitaoamerica, isFlipped: false },
		{ id: 9, name: 'Card 9', image: homemdeferro, isFlipped: false },
		{ id: 10, name: 'Card 10', image: homemaranha, isFlipped: false },
		{ id: 11, name: 'Card 11', image: homemaranha, isFlipped: false },
		{ id: 12, name: 'Card 12', image: homemdeferro, isFlipped: false },


	]);

	const [flippedCards, setFlippedCards] = useState([]);
	const [shuffledCards, setShuffledCards] = useState([]);

	useEffect(() => {
		shuffleCards();
	}, []);

	const shuffleCards = () => {
		const shuffled = cards.sort(() => Math.random() - 0.5);
		setShuffledCards(shuffled);
	};

	const handleCardClick = (clickedCard) => {
		if (flippedCards.length === 2) {
			setShuffledCards((prevCards) =>
				prevCards.map((card) =>
					card.isFlipped ? { ...card, isFlipped: false } : card
				)
			);

			setFlippedCards([]);
			return;
		}

		setShuffledCards((prevCards) =>
			prevCards.map((card) =>
				card.id === clickedCard.id ? { ...card, isFlipped: true } : card
			)
		);

		setFlippedCards((prevFlippedCards) => [...prevFlippedCards, clickedCard]);
	};

	return (
		<div className="board">
			{shuffledCards.map((card) => (
				<Card key={card.id} card={card} onClick={handleCardClick} />
			))}
		</div>
	);
};

export default Board;
