/* eslint-disable react/jsx-uses-react */
import React from 'react';

interface IPet {
    name: string;
    animal: string;
    breed: string;
    age?: number;
}

export default function Pet({ name, animal, breed }: IPet) {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, name),
        React.createElement('h2', {}, animal),
        React.createElement('h2', {}, breed)
    ]);
}
