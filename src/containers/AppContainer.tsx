import React, { useState } from 'react';
import { User } from '../Types';
import ChatWindow from './ChatWindow/ChatWindow';
import Sidebar from './Sidebar/Sidebar';

interface AppContainerProps {
    user: User;
}

const AppContainer = (props: AppContainerProps) => {
    const { user } = props;
    const [currentReceiver, setCurrentReceiver] = useState<User>(user);

    const handleReceiverChange = (newReceiver: User) => {
        setCurrentReceiver(newReceiver);
    };

    return (
        <div className="app-container">
            <Sidebar user={user} onReceiverChange={handleReceiverChange} />
            <ChatWindow receiver={currentReceiver} />
        </div>
    );
};

export default AppContainer;
