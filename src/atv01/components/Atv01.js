import Clock from './Clock';
import TypeWriter from './TypeWriter';
import { Link } from 'react-router-dom';

export default function Atv01() {
    return (
        <>
            <h1>Atividade 01</h1>
            <Clock />
            <TypeWriter />
            <br />
            <Link to="/">Retornar a página inicial</Link>
        </>
    )
}