
import React from 'react';
import Contador from "./ContadorPessoas";
import { Link } from 'react-router-dom';
import '../Style.css';

function Atv02() {
  return (
    <div className="App">
      <h1 className='atv'>Atividade 02</h1>
      <Contador />
      <br />
      <Link to="/">Retornar à página inicial</Link>
    </div>
  );
}
export default Atv02;