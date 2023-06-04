import React from 'react';
import BucketList from './BucketList';
import Counter from './Counter';
import CounterList from './CounterList';
import Form from './Form';
import Form2 from './Form2';
import Form3 from './Form3';
import Gallery from './Gallery';
import List from './List';
import List2 from './List2';
import List3 from './List3';
import List4 from './List4';
import MovingDot from './MovingDot';
import ShapeEditor from './ShapeEditor';
import Toolbar from './Toolbar';
import { Link } from 'react-router-dom';
import '../Style.css';

function Atv04() {
  return (
    <div className="App">
      <h1 className='atv'>Atividade 04</h1>
      <BucketList />
      <Counter />
      <CounterList />
      <Form />
      <Form2 />
      <Form3 />
      <Gallery />
      <List />
      <List2 />
      <List3 />
      <List4 />
      <MovingDot />
      <ShapeEditor />
      <Toolbar />
      <br />
      <Link to="/">Retornar à página inicial</Link>
    </div>
  );
}
export default Atv04;
