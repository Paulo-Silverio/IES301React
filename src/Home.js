import React from 'react';
import {Link} from 'react-router-dom';
import './Components/Style.css';

const Home = () => {
	return (
		<div>
			<h1 className='pag'>Pagina inicial</h1>
			<nav>
				<ul className='lista'>
					<li className='quadrado'>
						<Link className='cor' to="/Atv01">Atividade 01</Link>
					</li>
					<li className='quadrado'>
						<Link className='cor' to="/Atv02">Atividade 02</Link>
					</li>
					<li className='quadrado'>
						<Link className='cor' to="/Atv03">Atividade 03</Link>
					</li>
					<li className='quadrado'>
						<Link className='cor' to="/Atv04">Atividade 04</Link>
					</li>
					<li className='quadrado'>
						<Link className='cor' to="/Atv05">Atividade 05</Link>
					</li>
					<li className='quadrado'>
						<Link className='cor' to="/Atv06">Atividade 06</Link>
					</li>
					<li className='quadrado'>
						<Link className='cor' to="/Atv07">Atividade 07</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Home;