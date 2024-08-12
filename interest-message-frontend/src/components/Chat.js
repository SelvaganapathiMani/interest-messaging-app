// src/components/Chat.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Chat() {
    const { roomName } = useParams();
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const socket = new WebSocket(`ws://127.0.0.1:8000/ws/chat/${roomName}/`);

    useEffect(() => {
        socket.onmessage = (e) => {
            const data = JSON.parse(e.data);
            setMessages((prevMessages) => [...prevMessages, data.message]);
        };

        return () => socket.close();
    }, [socket]);

    const sendMessage = () => {
        if (input.trim()) {
            socket.send(JSON.stringify({ message: input }));
            setInput('');
        }
    };

    return (
        <div>
            <h2>Chat Room: {roomName}</h2>
            <div>
                {messages.map((msg, index) => (
                    <p key={index}>{msg}</p>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default Chat;
