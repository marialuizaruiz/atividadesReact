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

import { useState, useEffect } from 'react';
import Clock from './Clock';

function useTime() {
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(id);
    }, []);
    return time;
}

export default function App() {
    const time = useTime();
    return (
        <Clock time={time.toLocaleTimeString()} />
    );
}