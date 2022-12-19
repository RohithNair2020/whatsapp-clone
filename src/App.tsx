import React from 'react';
import './App.css';
import ChatWindow from './containers/ChatWindow/ChatWindow';
import Sidebar from './containers/Sidebar/Sidebar';

interface Props {
    name?: string;
}

const App = (props: Props) => {
    const { name } = props;
    console.log(name);
    return (
        <div className="app">
            <div className="app-container">
                <Sidebar />
                <ChatWindow />
            </div>
        </div>
    );
};

App.defaultProps = {
    name: 'Whatsapp Loading',
};

export default App;
