import TableOfContents from './TableOfContents';
import Gallery from "./Gallery";
import List from "./List";
import PackingList from "./PackingList";
import Profile from "./Profile";
import TeaGathering from "./TeaGathering";
import TeaSet from "./TeaSet";
import TodoList from "./TodoList";
import Avatar from './Avatar';
import App from './App';
import { Link } from 'react-router-dom';

export default function Atv03() {
    return (
        <>
        <div class="container">
            <div class="alinhar">
                <h1>Atividade 03</h1>
                <TableOfContents />
                <Gallery />
                <Profile />
                <TodoList />
                <Avatar />
                <List />
                <App />
                <PackingList />
                <TeaGathering />
                <TeaSet />
            </div> 
        </div>
        </>
    )
}