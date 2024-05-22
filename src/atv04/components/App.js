// function Button({ onSmash, children }) {
//     return (
//         <button onClick={onSmash}>
//             {children}
//         </button>
//     );
// }

// export default function App() {
//     return (
//         <div>
//             <Button onSmash={() => alert('Playing!')}>
//                 Play Movie
//             </Button>
//             <Button onSmash={() => alert('Uploading')}>
//                 Upload Image
//             </Button>
//         </div>
//     );
// }

// function App() {
//     return (
//         <Toolbar 
//             onPlayMovie={() => alert('Playing!')}
//             onUploadImage={() => alert('Uploading!')}
//         />
//     );
// }

// function Toolbar({ onPlayMovie, onUploadImage }) {
//     return (
//         <div className="Toolbar" onClick={() => {
//             alert('You clicked on the toolbar!');
//         }}>
//             <button onClick={() => alert('Playing!')}>
//                 Play Movie
//             </button>
//             <button onClick={() => alert('Uploading!')}>
//                 Upload Image
//             </button>
//         </div>
//     );
// }

// function Button({ onClick, children}) {
//     return (
//         <button onClick={e => {
//             e.stopPropagation();
//             onClick();
//         }}>
//             {children}
//         </button>
//     );
// }
//----------------------------------------------------------

import { sculptureList } from "./data.js";
import { useState } from "react";

export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick() {
        setIndex(index + 1);
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return (
        <>
            <button onClick={handleNextClick}>
                Next
            </button>
            <h2>
                <i>{sculpture.name}</i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculpture.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            <br/><br/>
            {showMore && <p>{sculpture.description}</p>}
            <img src={sculpture.url} alt={sculpture.alt}></img>
        </>
    );
}