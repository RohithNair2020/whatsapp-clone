import React, { useState } from 'react';
import {
    Formik, Field, Form,
} from 'formik';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './registrationContainer.css';
import API from '../../Router/api';

interface Values {
    name: string;
    phone: string;
    password: string;
    repeatPassword: string;
}

const initialValues = {
    name: '',
    phone: '',
    password: '',
    repeatPassword: '',
};

const RegistrationContainer = () => {
    const [isOtpForm, setIsOtpForm] = useState<Boolean>(false);
    console.log(isOtpForm, setIsOtpForm);

    const registerUser = async (user: Values) => {
        const response = await axios.post(API.REGISTER, {
            name: user.name,
            phone: user.phone,
            password: user.password,
        });
        console.log('axios response', response);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleRegistration = (values: Values) => {
        console.log('formik', values);
        if (values.name && values.phone) {
            if (values.password === values.repeatPassword) {
                registerUser(values);
            } else {
                alert('passwords do not match');
            }
        }
    };

    return (
        <div className="registration-container">
            <h2 className="registration-title">Registration</h2>
            <div>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleRegistration}
                >
                    <Form>
                        <div className="registration-form-container">
                            <div className="registration-form">
                                <div className="registration-input-container">
                                    <label htmlFor="name">Name</label>
                                    <Field className="registration-input" id="name" name="name" placeholder="Enter Name" />
                                </div>
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
                                <div className="registration-input-container">
                                    <label htmlFor="repeatPassword">Repeat Password</label>
                                    <Field
                                        className="registration-input"
                                        id="repeatPassword"
                                        type="password"
                                        name="repeatPassword"
                                        placeholder="Enter Password Again"
                                    />
                                </div>
                                <button className="registration-button" type="submit">Register</button>
                                <Link to="/login" className="link">
                                    <i className="register-link">Already have an account</i>
                                </Link>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default RegistrationContainer;
