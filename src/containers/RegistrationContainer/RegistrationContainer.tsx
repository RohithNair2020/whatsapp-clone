import React, { useState } from 'react';
import './registrationContainer.css';

const RegistrationContainer = () => {
    const [isOtpForm, setIsOtpForm] = useState<Boolean>(false);
    const [phone, setPhone] = useState<string>('');
    console.log(isOtpForm, setIsOtpForm);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handlePhoneChange = (e: any) => {
        console.log('form Submit', e.target.value);
        setPhone(e.target.value);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleRegistration = (e: any) => {
        console.log(e);
        console.log('phone number is', phone);
    };

    return (
        <div className="registration-container">
            <h2 className="registration-title">Registration</h2>
            <div className="registration-form-container">
                <div className="registration-form">
                    <label htmlFor="registration-num">Phone (+91)</label>
                    <input
                        type="text"
                        value={phone}
                        className="registration-input"
                        onChange={handlePhoneChange}
                    />
                    <button
                        type="submit"
                        className="registration-button"
                        onClick={handleRegistration}
                    >
                        Get OTP
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RegistrationContainer;
