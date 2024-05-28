import React from 'react';

function AlertButton({ message, children }) {
    return (
        <button onClick={() => alert(message)}>
            {children}
        </button>
    );
}

export default function Toolbar() {
    return (
        <div>
            <AlertButton message="Playing">
                Play Movie
            </AlertButton>
            <AlertButton message="Uploading!">
                Upload Image
            </AlertButton>
        </div>
    );
}

// function Button({ onClick, children }) {
//     return (
//         <button onClick={onClick}>
//             {children}
//         </button>
//     );
// }

// function PlayButton({ movieName }) {
//     function handlePlayClick() {
//         alert(`Playing ${movieName}!`);
//     }

//     return (
//         <Button onClick={handlePlayClick}>
//             Play "{movieName}"
//         </Button>
//     );
// }

// function UploadButton() {
//     return (
//         <Button onClick={() => alert('Uploading!')}>
//             Upload Image
//         </Button>
//     );
// }

// export default function Toolbar() {
//     return (
//         <div>
//             <PlayButton movieName="Kiki's Delivery Service" />
//             <UploadButton />
//         </div>
//     );
// }
