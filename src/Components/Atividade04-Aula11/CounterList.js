import { useState } from "react";
import './CSS.css';

let initialCounters = [0, 0, 0];

function CounterList() {
  const [counters, setCounters] = useState(initialCounters);
  function handleIncrementClick(index) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        return c + 1;
      } else {
        return c;
      }
    });
    setCounters(nextCounters);
  }
  return (
    <>
      <div className="atividades">
        <h1 className="atv"> CounterList </h1>
        <ul>
          {counters.map((counter, i) => (
            <li key={i}>
              {counter}{" "}
              <button
                onClick={() => {
                  handleIncrementClick(i);
                }}
              >
                +1
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default CounterList;