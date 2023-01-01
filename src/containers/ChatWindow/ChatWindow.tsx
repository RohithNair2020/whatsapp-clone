import { Avatar, IconButton } from '@mui/material';
import axios from 'axios';
import * as io from 'socket.io-client';
import React, {
    useState,
    useEffect,
    useRef,
    LegacyRef,
} from 'react';
import SendIcon from '@mui/icons-material/Send';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ChatText from '../../components/ChatText/ChatText';
import './chatWindow.css';
import { Message, User } from '../../Types';
import useFetchMessages from './useFetchMessages';
import API from '../../Router/api';
import { isArrayValidAndNotEmpty, isEnterKeyPressed } from '../../CommonUtil';

// const socket = io.connect('https://wa-backend.onrender.com', { transports: ['websocket', 'polling'] });
const socket = io.connect('http://localhost:8090', { transports: ['websocket', 'polling'] });
// const socket = io.connect('https://wa-backend.onrender.com');

socket.on('connect_error', (err) => {
    console.log('socket state', err);
});

interface ChatWindowProps {
    userMessages?: string[];
    user: User;
    receiver: User | null;
}

const ChatWindow = (props: ChatWindowProps) => {
    const { userMessages, user, receiver } = props;
    const [textInputValue, setTextInputValue] = useState<string>('');
    const scrollRef = useRef<HTMLDivElement>();

    const sendSocketMessage = (data: Object) => {
        socket.emit('message_sent', data);
    };

    console.log(sendSocketMessage);

    const handleTextInputChange =
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setTextInputValue(e.target.value);
        };

    // const chatWindow = document.getElementById('chatWindow');
    // eslint-disable-next-line no-underscore-dangle
    const { data, isLoading, refetch } = useFetchMessages(user.userId, receiver?._id);
    const messageList = data?.data;
    console.log('chat data', messageList, isLoading);

    const sendMessage = async () => {
        if (textInputValue.length) {
            const messagePayload = {
                message: textInputValue,
                sender: user.userId,
                // eslint-disable-next-line no-underscore-dangle
                receiver: receiver!._id,
            };
            const response = await axios.post(API.NEW_MESSAGE, messagePayload);
            socket.emit('message_sent');
            setTextInputValue('');
            console.log('message send response', response);
            // refetch();
        }
    };

    const handleKeyDown =
        (e: React.KeyboardEvent) => {
            if (isEnterKeyPressed(e)) {
                sendMessage();
            }
        };

    useEffect(() => {
        socket.on('new_message', () => refetch());
    }, [socket]);

    useEffect(() => {
        if (scrollRef.current !== null) {
            scrollRef.current?.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'nearest' });
        }
    }, [messageList]);

    console.log('receiver', userMessages, user, receiver);
    return (
        <div className="chat-window-container">
            <div className="chat-window-header">
                <div className="chat-window-profile-pic">
                    <Avatar src="/propic2.jfif" />
                </div>
                <div className="chat-window-header-info">
                    <h2>{receiver?.name || receiver?.phone || ''}</h2>
                </div>
            </div>
            <div id="chatWindow" className="chat-window-body">
                {
                    isArrayValidAndNotEmpty(messageList) &&
                    messageList.map((message: Message) => (
                        <div
                            key={message.message}
                            ref={scrollRef as LegacyRef<HTMLDivElement>}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            {
                                message.sender === user.userId ? (
                                    <ChatText
                                        key={message.message}
                                        user
                                        message={message.message}
                                    />
                                ) : (
                                    <ChatText key={message.message} message={message.message} />
                                )
                            }
                        </div>
                    ))

                }
            </div>
            <div className="chat-window-text-field">
                <IconButton>
                    <InsertEmoticonIcon className="icon" />
                </IconButton>
                <IconButton>
                    <AttachFileIcon className="icon" />
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
                        onKeyDown={handleKeyDown}
                    />
                </div>
                <IconButton onClick={sendMessage}>
                    <SendIcon
                        className={textInputValue ? 'icon-green' : 'icon'}
                    />
                </IconButton>
            </div>
        </div>
    );
};

ChatWindow.defaultProps = {
    userMessages: [],
};

export default ChatWindow;
