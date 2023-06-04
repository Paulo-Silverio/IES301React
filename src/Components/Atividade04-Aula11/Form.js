import { useState } from "react";
import './CSS.css';

function FormAula5() {
    const [to, setTo] = useState("Alice");
    const [message, setMessage] = useState("Hi!")

    function handleSubmit(e) {
        e.preventDefault()
        setTimeout(() => {
            alert(`You said ${message} to ${to}`)
        })
    }

    return (
        <div className="atividades">
            <h1 className="atv"> form </h1>
            <form onSubmit={handleSubmit}>
                <label>
                    To {' '}
                    <select value={to} onChange={(e) => setMessage(e.target.value)}>
                        <option value="Alice">Alice</option>
                        <option value="Bob">Bob</option>
                    </select>
                </label>
                <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default FormAula5;