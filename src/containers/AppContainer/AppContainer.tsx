import React, { useState } from 'react';
import './appContainer.css';
import { User } from '../../Types';
import ChatWindow from '../ChatWindow/ChatWindow';
import Sidebar from '../Sidebar/Sidebar';

interface AppContainerProps {
    user: User;
}

const AppContainer = (props: AppContainerProps) => {
    const { user } = props;
    const [currentReceiver, setCurrentReceiver] = useState<User | null>(null);

    const handleReceiverChange = (newReceiver: User) => {
        setCurrentReceiver(newReceiver);
    };

    console.log('user in container', user);

    return (
        <div className="app-container">
            <Sidebar user={user} onReceiverChange={handleReceiverChange} />
            {
                currentReceiver && (
                    <ChatWindow
                        user={user}
                        receiver={currentReceiver}
                    />
                )
            }
        </div>
    );
};

export default AppContainer;
