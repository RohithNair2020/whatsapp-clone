/* eslint-disable react/jsx-wrap-multilines */
import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route } from 'react-router-dom';
import useStore, { Store } from './Store';
import './App.css';
import AppContainer from './containers/AppContainer';
import LoginContainer from './containers/LoginContainer/LoginContainer';
import RegistrationContainer from './containers/RegistrationContainer/RegistrationContainer';
import PrivateRoute from './Router/PrivateRoute';

const queryClient = new QueryClient();

const App = () => {
    const [auth, setAuth] = useState(true);
    const user = useStore((state: Store) => state.user);

    console.log(setAuth);

    return (
        <QueryClientProvider client={queryClient}>
            <div className="app">
                <Routes>
                    <Route path="/login" element={<LoginContainer />} />
                    <Route path="/register" element={<RegistrationContainer />} />
                    <Route
                        path="/dashboard"
                        element={
                            <PrivateRoute user={{ token: auth }}>
                                <AppContainer user={user} />
                            </PrivateRoute>
                        }
                    />
                    <Route path="*" element={<LoginContainer />} />
                </Routes>
            </div>
        </QueryClientProvider>
    );
};

App.defaultProps = {
    name: 'Whatsapp Loading',
};

export default App;
