import Avatar from '@mui/material/Avatar';
import React from 'react';
import './chatTile.css';

interface ChatTileProps {
    name: string;
}

const ChatTile = (props: ChatTileProps) => {
    const { name } = props;
    return (
        <div className="chat-tile-container">
            <div className="chat-tile-dp">
                <Avatar className="avatar" src="/propic1.jfif" />
            </div>
            <div className="chat-tile-info-container">
                <div className="chat-tile-infor">
                    <h2 className="chat-tile-info-name">{name}</h2>
                    <small className="chat-tile-info-last-message">
                        This message was deleted
                    </small>
                </div>
            </div>
        </div>
    );
};

export default ChatTile;
