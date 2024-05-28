import Toolbar from './Toolbar';
import Gallery from './Gallery';
import Form from './Form';
import Counter from './Counter';
import MovingDot from './MovingDot';
import Form2 from './Form2';
import Form3 from './Form3';
import List from './List';
import List2 from './List2';
import ShapeEditor from './ShapeEditor';
import CounterList from './CounterList';
import List3 from './List3';
import List4 from './List4';
import BucketList from './BucketList';

export default function Atv04() {
    return (
        <>
            <div class="container">
                <div class="alinhar">
                    <h1 id="centralizar">Atividade 04</h1>
                    <br/><ShapeEditor /><hr/>
                    <br/><Toolbar /><hr/>
                    <br/><Gallery /><hr/>
                    <Counter /><hr/>
                    <br/><Form /><hr/>
                    <br/><MovingDot /><hr/>
                    <Form2 /><hr/>
                    <br/><Form3 /><hr/>
                    <br/><List /><hr/>
                    <br/><List2 /><hr/>
                    <CounterList /><hr/>
                    <List3 /><hr/>
                    <br/><List4 /><hr/>
                    <BucketList /><hr/>
                </div>
            </div>
        </>
    )
}