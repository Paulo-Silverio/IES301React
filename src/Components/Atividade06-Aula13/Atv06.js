import React from 'react';
import Calculadora from "./Calculadora";
import { Link } from 'react-router-dom';
import '../Style.css';

function Atv06() {
  return (
    <div className="App">
      <h1 className='atv'>Atividade 06</h1>
      <Calculadora />
      <br />
      <Link to="/">Retornar à página inicial</Link>
    </div>
  );
}
export default Atv06;
