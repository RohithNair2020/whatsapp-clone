import { Avatar, IconButton } from '@mui/material';
import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ChatText from '../../components/ChatText/ChatText';
import './chatWindow.css';

interface ChatWindowProps {
    userMessages?: string[];
}

const ChatWindow = (props: ChatWindowProps) => {
    const { userMessages } = props;
    const [myMessages, setMyMessages] = useState<string[]>([]);
    const [textInputValue, setTextInputValue] = useState<string>('');

    const handleTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTextInputValue(e.target.value);
    };

    const sendMessage = () => {
        if (textInputValue) {
            setMyMessages((prev) => [...prev, textInputValue]);
        }
        setTextInputValue('');
    };

    console.log(userMessages);
    return (
        <div className="chat-window-container">
            <div className="chat-window-header">
                <div className="chat-window-profile-pic">
                    <Avatar />
                </div>
                <div className="chat-window-header-info">
                    <h2>Rohith</h2>
                </div>
            </div>
            <div className="chat-window-body">
                <ChatText message="shukham aano?" />
                <ChatText message="shukham aano?" />
                <ChatText message="shukham aano?" />
                <ChatText message="shukham aano?" />
                <ChatText message="shukham aano?" />
                <ChatText message="shukham aano?" />
                <ChatText user message="entha mole? jaada aano?" />
                <ChatText
                    user
                    message="entha mole? jaada aano? entha mole? jaada aano? entha mole? jaada aano? entha mole? jaada aano? entha mole? jaada aano? entha mole? jaada aano? entha mole? jaada aano? "
                />
                <ChatText user message="entha mole? jaada aano?" />
                <ChatText user message="entha mole? jaada aano?" />
                <ChatText user message="entha mole? jaada aano?" />
                <ChatText message="shukham aano?" />
                <ChatText user message="entha mole? jaada aano?" />
                <ChatText message="shukham aano?" />
                <ChatText user message="entha mole? jaada aano?" />
                <ChatText message="shukham aano?" />
                <ChatText user message="entha mole? jaada aano?" />
                <ChatText message="shukham aano?" />
                <ChatText user message="entha mole? jaada aano?" />
                <ChatText message="shukham aano?" />
                <ChatText user message="entha mole? jaada aano?" />
                <ChatText message="shukham aano?" />
                <ChatText user message="entha mole? jaada aano?" />
                <ChatText message="shukham aano?" />
                <ChatText user message="entha mole? jaada aano?" />
                <ChatText message="shukham aano?" />
                <ChatText user message="entha mole? jaada aano?" />
                <ChatText message="shukham aano?" />
                <ChatText user message="entha mole? jaada aano?" />
                <ChatText message="a" />
                {myMessages.map((message) => (
                    <ChatText key={message} user message={message} />
                ))}
            </div>
            <div className="chat-window-text-field">
                <IconButton>
                    <InsertEmoticonIcon />
                </IconButton>
                <IconButton>
                    <AttachFileIcon />
                </IconButton>
                <div className="text-field-input-container">
                    {/* <textarea
                        rows={1}
                        id="chat-text-field"
                        name="text"
                        className="chat-text-field"
                    /> */}
                    <input
                        type="text"
                        className="chat-text-field"
                        value={textInputValue}
                        onChange={handleTextInputChange}
                    />
                </div>
                <IconButton onClick={sendMessage}>
                    <SendIcon />
                </IconButton>
            </div>
        </div>
    );
};

ChatWindow.defaultProps = {
    userMessages: [],
};

export default ChatWindow;
