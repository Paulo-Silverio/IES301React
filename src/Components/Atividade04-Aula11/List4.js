import { useState } from "react";
import './CSS.css';

let nextId = 3;
const initialList = [
    { id: 0, title: 'Big Bellies' },
    { id: 1, title: 'Lunar Landscape' },
    { id: 2, title: 'Terracotta Army' },
]

function List4Aula5() {
    const [list, setList] = useState(initialList);
    function handleClick() {
        const nextList = [...list]
        nextList.reverse();
        setList(nextList);
    }
    return (
        <>
            <div className="atividades">
                <h1 className="atv"> List4 </h1>
                <button onClick={handleClick}>Reverse</button>
                <ul>
                    {list.map(artwork => (
                        <li key={artwork.id}>{artwork.title}</li>
                    ))}
                </ul>
            </div>
        </>

    )
}

export default List4Aula5;