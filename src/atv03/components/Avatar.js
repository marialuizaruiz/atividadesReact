import React, { useState } from 'react';

export default function Avatar() {
    const avatar = 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Gregorio_Y._Zara_NAST.jpg';
    const description = 'Gregorio Y. Zara';
    return (
        <img
            className='avatar'
            src={avatar}
            alt={description}
        />
    );
}

