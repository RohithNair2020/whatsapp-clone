import React from 'react';
import './chatText.css';

interface ChatTextProps {
    message: string;
    user?: boolean;
}

const ChatText = (props: ChatTextProps) => {
    const { message, user } = props;
    console.log('chat text');
    return (
        <div
            className={`chat-text-container ${
                user ? 'chat-text-user' : 'chat-text-normal'
            }`}
        >
            <p className="chat-text-content">{message}</p>
            <small className="chat-text-time-stamp">6:00 pm</small>
        </div>
    );
};

ChatText.defaultProps = {
    user: false,
};

export default ChatText;
