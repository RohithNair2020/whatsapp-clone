import Avatar from '@mui/material/Avatar';
import React from 'react';
import './chatTile.css';

const ChatTile = () => {
    console.log('chatTile');
    return (
        <div className="chat-tile-container">
            <div className="chat-tile-dp">
                <Avatar className="avatar" src="/propic1.jfif" />
            </div>
            <div className="chat-tile-info-container">
                <div className="chat-tile-infor">
                    <h2 className="chat-tile-info-name">John</h2>
                    <small className="chat-tile-info-last-message">
                        This message was deleted
                    </small>
                </div>
            </div>
        </div>
    );
};

export default ChatTile;
