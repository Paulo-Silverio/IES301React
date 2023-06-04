import React from 'react';
import Accordion from "./Accordion";
import Chat from './Chat';
import ContactList from "./ContactList";
import FormQuiz from "./FormQuiz";
import FormTicket from './FormTicket';
import { Link } from 'react-router-dom';
import '../Style.css';

function Atv05() {
  return (
    <div className="App">
      <h1 className='atv'>Atividade 05</h1>
      <Accordion />
      <Chat />
      <ContactList />
      <FormQuiz />
      <FormTicket />
      <br />
      <Link to="/">Retornar à página inicial</Link>
    </div>
  );
}
export default Atv05;