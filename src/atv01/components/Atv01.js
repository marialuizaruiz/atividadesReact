import Clock from './Clock'; 
import TypeWriter from './TypeWriter';
import { Link } from 'react-router-dom';
import '../../style.css'; 

export default function Atv01() {
    return (
        <>
        <div class="container">
            <h1>Atividade 01</h1>
            <Clock />
            <TypeWriter />
        </div> 
        </>
    )
}