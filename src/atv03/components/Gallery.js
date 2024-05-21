export function Profile() {
    return (
        <div style={{ display: 'inline-block', margin: '10px'}}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Katherine_Johnson_1983.jpg/220px-Katherine_Johnson_1983.jpg" alt="Katherine Johnson"/>
        </div> 
    );
}

export default function Gallery() {
    return (
        <section>
            <h1>Amazing Scientists</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}

