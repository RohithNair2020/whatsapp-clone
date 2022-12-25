import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './registrationContainer.css';
import API from '../../Router/api';

const RegistrationContainer = () => {
    const [isOtpForm, setIsOtpForm] = useState<Boolean>(false);
    const [phone, setPhone] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [repeatPassword, setRepeatPassword] = useState<string>('');
    console.log(isOtpForm, setIsOtpForm);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('form Submit', e.target.value);
        setPhone(e.target.value);
    };
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('form Submit', e.target.value);
        setPassword(e.target.value);
    };
    const handleRepeatPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('form Submit', e.target.value);
        setRepeatPassword(e.target.value);
    };

    const registerUser = async () => {
        const response = await axios.post(API.REGISTER, { phone, password });
        console.log('axios response', response);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleRegistration = () => {
        if (password !== repeatPassword) {
            alert("passwords don't match");
        } else {
            registerUser();
        }
    };

    return (
        <div className="registration-container">
            <h2 className="registration-title">Registration</h2>
            <div className="registration-form-container">
                <div className="registration-form">
                    <div className="registration-input-container">
                        <label htmlFor="registration-num">Phone (+91)</label>
                        <input
                            type="text"
                            value={phone}
                            className="registration-input"
                            onChange={handlePhoneChange}
                        />
                    </div>
                    <div className="registration-input-container">
                        <label htmlFor="registration-password">Enter password</label>
                        <input
                            type="password"
                            value={password}
                            className="registration-input"
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div className="registration-input-container">
                        <label htmlFor="registration-password">Re-enter password</label>
                        <input
                            type="password"
                            value={repeatPassword}
                            className="registration-input"
                            onChange={handleRepeatPasswordChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="registration-button"
                        onClick={handleRegistration}
                    >
                        Register
                    </button>
                    <Link to="/login" className="link">
                        <i className="register-link">Already have an account</i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RegistrationContainer;
