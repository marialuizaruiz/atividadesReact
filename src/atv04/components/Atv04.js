import Button from './Button';
import Toolbar from './Toolbar';
import App from './App';
import Signup from './Signup';
import { Link } from 'react-router-dom';

export default function Atv04() {
    return (
        <>
            <div class="container">
                <h1 id="centralizar">Atividade 04</h1>
                <Button /><hr/>
                <Toolbar /><hr/>
                <Signup /><hr/>
                <App /><hr/>
            </div>
        </>
    )
}