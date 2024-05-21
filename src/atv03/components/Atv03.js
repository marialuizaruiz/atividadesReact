import TableOfContents from './TableOfContents';
import Profile from './Profile';
import Gallery from './Gallery';
// import { Profile } from './Gallery';
import TodoList from './TodoList';
import Avatar from './Avatar';
import { Link } from 'react-router-dom';

export default function Atv03() {
    return (
        <>
        <div class="container">
            <div class="alinhar">
                <h1>Atividade 03</h1>
                <TableOfContents />
                <Profile />
                <Gallery />
                <TodoList />
                <Avatar />
            </div> 
        </div>
        </>
    )
}