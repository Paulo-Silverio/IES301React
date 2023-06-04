import { useState } from "react";
import './CSS.css';

function CounterAula5() {
  const [number, setNumber] = useState(1);
  return (
    <>
      <div className="atividades">
        <h1 className="atv"> Counter </h1>
        <h1>{number}</h1>
        <button
          onClick={() => {
            setNumber(number + 5)
            setNumber(n => n + 1)
            setNumber(3)
          }}
        >
          Increment Number
        </button>
      </div>
    </>
  );
}
export default CounterAula5;