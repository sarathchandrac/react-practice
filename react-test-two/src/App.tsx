/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import Pet from './Pet';

function App() {
    return (
        <div>
            <h1>Adopt Me!</h1>
            <Pet name="Luna" animal="dog" breed="Havanese" />
            <Pet name="Pepper" animal="bird" breed="Cockatiel" />
            <Pet name="Doink" animal="cat" breed="Mix" />
        </div>
    );
}

export default App;
