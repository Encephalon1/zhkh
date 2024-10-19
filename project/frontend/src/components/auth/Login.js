import React, { useState } from 'react';
import axios from 'axios';
import { Form, Navigate, redirect } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    let logged = false;

    const loginUser = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', { username, password });
            localStorage.setItem('access', response.data.access);
            localStorage.setItem('refresh', response.data.refresh);
            setError('');
            logged = true;
        } catch (err) {
            setError(err.response.data.message);
        }        
    };

    return (
        <div>
            
                <div class="form-group">
                    <input class="form-control item" 
                    type="text" 
                    name="username" 
                    placeholder="Логин" 
                    required 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div class="form-group">
                    <input class="form-control item" 
                    type="password" 
                    name="password" 
                    placeholder="Пароль" 
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div class="form-group">
                    <button class="btn btn-primary btn-block create-account" 
                    onClick={loginUser}>Вход в аккаунт</button>
                    if(logged) return <Navigate to="/" />
                </div>
            
        </div>
    );
};

export default Login;