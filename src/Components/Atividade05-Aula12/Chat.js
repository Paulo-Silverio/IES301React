import React, { useState } from "react";

function Chat({ contact }) {
    const [text, setText] = useState('');

    if (!contact || !contact.name) {
        return null; // Verifica se 'contact' ou 'contact.name' é indefinido e retorna null se for o caso
    }

    return (
        <div className="atividades">
            <h1 className="atv"> Chat </h1>
            <section className="chat">
                <textarea
                    value={text}
                    placeholder={`Chat to ${contact.name}`}
                    onChange={(e) => setText(e.target.value)}
                />
                <br />
                <button>Send to {contact.email}</button>
            </section>
        </div>
    );
}

export default Chat;
