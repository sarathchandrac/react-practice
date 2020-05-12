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
{/*
            <Pet name="Luna" animal="dog" breed="Havanese" />
            <Pet name="Pepper" animal="bird" breed="Cockatiel" />
            <Pet name="Doink" animal="cat" breed="Mix" /> */}
        </div>
    );
}

export default App;
