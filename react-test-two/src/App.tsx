import React from 'react';
import './App.css';
import Pet from './Pet';
import SearchParams from './SearchParams';

function App() {
    return (
        <div>
            <h1>Adopt Me!</h1>
            <div>
                <SearchParams />
            </div>
        </div>
    );
}

export default App;
