import React, { useState } from 'react';

const today = new Date();

const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-US',
        { weekday: 'long' }
    ).format(date);
}

export default function TodoList() {
    const name = 'Gregorio Y. Zara';
    return (
        <div>
            
            <>
                <h1>Hedy Lamarr's Todos</h1>
                <img  
                    src="https://upload.wikimedia.org/wikipedia/commons/8/83/Hedy_Lamarr_Publicity_Photo_for_The_Heavenly_Body_1944.jpg" 
                    alt="Hedy Lamarr"
                    className="photo"
                />
                <ul>
                    <li>Invent new traffic lights</li>
                    <li>Rehearse a movie scene</li>
                    <li>Improve the spectrum technology</li>
                </ul>
            </>

            <>
                <h1>{name}'s To Do List</h1>
            </>

            <>
                <h1>To Do List for {formatDate(today)}</h1>
            </>

            <>
                <div style={person.theme}>
                    <h1>{person.name}'s Todos</h1>
                    <img
                        className='avatar'
                        src='https://upload.wikimedia.org/wikipedia/commons/3/3a/Gregorio_Y._Zara_NAST.jpg'
                        alt='Gregorio Y. Zara'
                    />
                    <li>Improve the videophone</li>
                    <li>Prepare aeronautics lectures</li>
                    <li>Work on the alcohol-fuelled engines</li>
                </div>
            </>

        </div> 
    );
}
