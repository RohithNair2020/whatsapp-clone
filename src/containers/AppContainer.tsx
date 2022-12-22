import React from 'react';
import ChatWindow from './ChatWindow/ChatWindow';
import Sidebar from './Sidebar/Sidebar';

const AppContainer = () => {
    console.log('props');
    return (
        <div className="app-container">
            <Sidebar />
            <ChatWindow />
        </div>
    );
};

export default AppContainer;
