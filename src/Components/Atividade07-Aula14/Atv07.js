import React from 'react';
import Board from "./board.js";
import { Link } from 'react-router-dom';
import '../Style.css';
import './CSS.css';

function Atv07() {
	return (
		<div className="App">
			<h1 className='atv'>Atividade 07</h1>
			<Board />
			<br />
			<Link to="/">Retornar à página inicial</Link>
		</div>
	);
}
export default Atv07;
