import React from 'react';
import { Link } from 'react-router-dom';
import Letreiro from "./Letreiro";
import Relogio from "./Relogio";
import '../Style.css';

function Atv01() {
  return (
    <div className="App">
      <h1 className='atv'>Atividade 01</h1>
      <Letreiro />
      <Relogio />
      <br />
      <Link to="/">Retornar à página inicial</Link>
    </div>
  );
}
export default Atv01;
