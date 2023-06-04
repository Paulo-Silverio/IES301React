import { useState } from "react";
import './CSS.css';

let nextId = 0;
function ListAula5() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);
  return (
    <>
      <div className="atividades">
        <h1 className="atv"> List </h1>
        <h1>Inspiring sculptors</h1>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button
          onClick={() => {
            setArtists([...artists, { id: nextId++, name: name }])
          }}
        >
          Add
        </button>
        <ul>
          {artists.map(artist => (
            <li key={artist.id}>{artist.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListAula5;