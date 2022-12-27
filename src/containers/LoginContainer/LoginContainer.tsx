import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Formik, Field, Form,
} from 'formik';
import API from '../../Router/api';
import useStore, { Store } from '../../Store';
import './loginContainer.css';

interface Values {
    phone: string;
    password: string;
}

const initialValues = {
    phone: '',
    password: '',
};

const LoginContainer = () => {
    console.log('props');
    const setUser = useStore((state: Store) => state.setUser);
    const navigate = useNavigate();

    const login = async (values: Values) => {
        const response = await axios.post(API.LOGIN, {
            phone: values.phone,
            password: values.password,
        });
        console.log('login response', response);
        if (response.data) {
            localStorage.setItem('auth', response.data.token);
            const currentUser = {
                _id: response.data.userId,
                name: response.data.name,
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
            <div>
                <Formik
                    initialValues={initialValues}
                    onSubmit={login}
                >
                    <Form>
                        <div className="registration-form-container">
                            <div className="registration-form">
                                <div className="registration-input-container">
                                    <label htmlFor="phone">phone</label>
                                    <Field className="registration-input" id="phone" name="phone" placeholder="Enter Contact No" />
                                </div>
                                <div className="registration-input-container">
                                    <label htmlFor="password">Password</label>
                                    <Field
                                        className="registration-input"
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="Enter Password"
                                    />
                                </div>
                                <button className="registration-button" type="submit">Login</button>
                                <Link to="/register" className="link">
                                    <i className="register-link">Signup</i>
                                </Link>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default LoginContainer;
