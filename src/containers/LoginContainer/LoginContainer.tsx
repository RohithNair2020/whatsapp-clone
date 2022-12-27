import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Formik, Field, Form, FormikHelpers,
} from 'formik';
import API from '../../Router/api';
import useStore, { Store } from '../../Store';
import './loginContainer.css';

interface Values {
    firstName: string;
    lastName: string;
    email: string;
}

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
            localStorage.setItem('auth', response.data.token);
            const currentUser = {
                _id: response.data.userId,
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
            <div>
                <h1>Signup</h1>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                    }}
                    onSubmit={(
                        values: Values,
                        { setSubmitting }: FormikHelpers<Values>,
                    ) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 500);
                    }}
                >
                    <Form>
                        <label htmlFor="firstName">First Name</label>
                        <Field id="firstName" name="firstName" placeholder="John" />

                        <label htmlFor="lastName">Last Name</label>
                        <Field id="lastName" name="lastName" placeholder="Doe" />

                        <label htmlFor="email">Email</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="john@acme.com"
                            type="email"
                        />

                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default LoginContainer;
