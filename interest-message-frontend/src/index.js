// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Login from './components/Login';
import Register from './components/Register';  // Import the Register component
import UsersList from './components/UsersList';
import Chat from './components/Chat';

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />  {/* Add the registration route */}
            <Route path="/users" element={<UsersList />} />
            <Route path="/chat/:roomName" element={<Chat />} />
        </Routes>
    </Router>,
    document.getElementById('root')
);
