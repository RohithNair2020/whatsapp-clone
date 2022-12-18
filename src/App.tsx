import React from 'react';
import './App.css';

interface Props {
    name?: string;
}

const App = (props: Props) => {
    const { name } = props;
    console.log(name);
    return <div className="App'">Whatsapp Clone</div>;
};

App.defaultProps = {
    name: 'Whatsapp Loading',
};

export default App;
