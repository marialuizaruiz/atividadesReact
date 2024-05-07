import Contador from './Contador';
import { Link } from 'react-router-dom';

export default function Atv02() {
    return (
        <>
            <div class="content">
                <h1>Atividade 02</h1>
                <Contador />
                <br />
                <Link to="/">Retornar a página inicial</Link>
            </div>
        </>
    )
}