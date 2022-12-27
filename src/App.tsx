/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route } from 'react-router-dom';
import useStore, { Store } from './Store';
import './App.css';
import AppContainer from './containers/AppContainer/AppContainer';
import LoginContainer from './containers/LoginContainer/LoginContainer';
import RegistrationContainer from './containers/RegistrationContainer/RegistrationContainer';
import PrivateRoute from './Router/PrivateRoute';

const queryClient = new QueryClient();

const App = () => {
    const user = useStore((state: Store) => state.user);

    console.log('setAuth', user);

    return (
        <QueryClientProvider client={queryClient}>
            <div className="app">
                <Routes>
                    <Route path="/login" element={<LoginContainer />} />
                    <Route path="/register" element={<RegistrationContainer />} />
                    <Route
                        path="/dashboard"
                        element={
                            <PrivateRoute user={{ token: user.phone.length !== 0 }}>
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
