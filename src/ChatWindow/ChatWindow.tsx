import { Avatar } from '@mui/material';
import React from 'react';
import './chatWindow.css';

interface ChatWindowProps {}

const ChatWindow = (props: ChatWindowProps) => {
    console.log(props);
    return (
        <div className="chat-window-container">
            <div className="chat-window-header">
                <div className="chat-window-profile-pic">
                    <Avatar />
                </div>
            </div>
        </div>
    );
};

export default ChatWindow;
