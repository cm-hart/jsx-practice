import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome'

const App = () => {
    return (
    <div>
        <p>hello</p>
        <Welcome />
    </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)