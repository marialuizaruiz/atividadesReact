import { createRoot } from "react-dom/client";

export default function Image() {
    return (
        <img 
            src="https://en.wikiarquitectura.com/wp-content/uploads/2017/01/07_floralis.jpg"
            alt="'Floralis Genérica' by Eduardo Catalano"
        />
    );
}

const root = createRoot(document.getElementById('root'))
root.render(<image />)