import React from 'react';
import { User } from '../Types';
import ChatWindow from './ChatWindow/ChatWindow';
import Sidebar from './Sidebar/Sidebar';

interface AppContainerProps {
    user: User | null;
}

const AppContainer = (props: AppContainerProps) => {
    const { user } = props;
    return (
        <div className="app-container">
            <Sidebar user={user} />
            <ChatWindow />
        </div>
    );
};

export default AppContainer;
