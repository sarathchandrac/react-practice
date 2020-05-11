/* eslint-disable no-unused-vars */
import React from 'react';

interface IPet {
    name: string;
    animal: string;
    breed: string;
    age?: number;
}

export default function Pet({ name, animal, breed }: IPet) {
    return (
        <div>
            <h1>{name}</h1>
            <h2>{animal}</h2>
            <h2>{breed}</h2>
        </div>
    );
}
