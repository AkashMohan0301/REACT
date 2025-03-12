import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
    return (
        <div>
            <h1>HELLO</h1>
        </div>
    )
}

// Get the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app
root.render(<App />);