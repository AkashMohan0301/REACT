import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header'

const App = () => {
    return (
        <>
        <Header></Header>
        </>
    )
}


// Get the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app
root.render(<App />);