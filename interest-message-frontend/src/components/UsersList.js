// src/components/UsersList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';
import { useNavigate } from 'react-router-dom';

function UsersList() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${config.API_URL}api/users/`, {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`
            }
        })
        .then(response => setUsers(response.data))
        .catch(error => {
            console.error('Failed to fetch users:', error);
            if (error.response && error.response.status === 401) {
                navigate('/login');
            }
        });
    }, [navigate]);

    const sendInterest = (userId) => {
        // Implement functionality to send interest here
        // Redirect to chat room after sending interest
        // You can create a room name by combining user IDs or any other method
        const roomName = `chat_with_user_${userId}`;
        navigate(`/chat/${roomName}`);
    };

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.username}
                        <button onClick={() => sendInterest(user.id)}>Send Interest</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UsersList;
