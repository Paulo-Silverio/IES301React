import React from 'react';
import TodoList from "./TodoList";
import Gallery from './Gallery';
import { Link } from 'react-router-dom';
import '../Style.css';

function Atv03() {
  return (
    <div className="App">
      <h1 className='atv'>Atividade 03</h1>
      <Gallery />
      <TodoList />
      <br />
      <Link to="/">Retornar à página inicial</Link>
    </div>
  );
}
export default Atv03;