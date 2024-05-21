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
                <TableOfContents /><hr/>
                <Gallery /><hr/>
                <Profile /><hr/>
                <TodoList />
                <Avatar /><hr/>
                <List /><hr/>
                <App /><hr/>
                <PackingList /><hr/>
                <TeaGathering /><hr/>
                <TeaSet />
            </div> 
        </div>
        </>
    )
}