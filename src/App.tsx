/* eslint-disable react/jsx-wrap-multilines */
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AppContainer from './containers/AppContainer';
import LoginContainer from './containers/LoginContainer/LoginContainer';
import RegistrationContainer from './containers/RegistrationContainer/RegistrationContainer';
import PrivateRoute from './Router/PrivateRoute';

const App = () => {
    const [auth, setAuth] = useState(true);
    console.log(setAuth);

    return (
        <div className="app">
            <Routes>
                <Route path="/login" element={<LoginContainer />} />
                <Route path="/register" element={<RegistrationContainer />} />
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute user={{ token: auth }}>
                            <AppContainer />
                        </PrivateRoute>
                    }
                />
                <Route path="*" element={<LoginContainer />} />
            </Routes>
        </div>
    );
};

App.defaultProps = {
    name: 'Whatsapp Loading',
};

export default App;
