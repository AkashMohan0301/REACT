import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
    return (
        //JSX code
        //Allways return a single parent element
        //If you want to return multiple elements, wrap them in a div
        <div className='Class1'>
            <h1>HELLO</h1>
        </div>
    )
}


// Get the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app
root.render(<App />);