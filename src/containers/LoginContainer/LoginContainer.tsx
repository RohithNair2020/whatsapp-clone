import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../../Router/api';
import useStore, { Store } from '../../Store';
import './loginContainer.css';

const LoginContainer = () => {
    console.log('props');
    const [phone, setPhone] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const setUser = useStore((state: Store) => state.setUser);
    const navigate = useNavigate();

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('login event', e.target.value);
        setPhone(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('login event', e);
        setPassword(e.target.value);
    };

    const login = async () => {
        const response = await axios.post(API.LOGIN, { phone, password });
        console.log('login response', response);
        if (response.data) {
            localStorage.setItem('auth', JSON.stringify(response.data));
            const currentUser = {
                userId: response.data?.userId,
                phone: response.data?.phone,
            };
            setUser(currentUser);
            navigate('/dashboard');
        } else {
            alert('password incorrect');
        }
    };

    return (
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            <div className="login-form-container">
                <div className="login-form">
                    <div className="login-input-container">
                        <label htmlFor="login-num">Phone (+91)</label>
                        <input
                            onChange={handlePhoneChange}
                            type="tel"
                            value={phone}
                            className="login-input"
                        />
                    </div>
                    <div className="login-input-container">
                        <label htmlFor="login-pass">Password</label>
                        <input
                            onChange={handlePasswordChange}
                            type="password"
                            value={password}
                            className="login-input"
                        />
                    </div>
                    <button
                        type="submit"
                        className="login-button"
                        onClick={login}
                    >
                        Login
                    </button>
                    <Link to="/register" className="link">
                        <i className="register-link">Create an account</i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginContainer;
