import { people } from "./data";
import { getImageUrl } from "./utils";

export default function List() {
    const chemists = people.filter(person =>
        person.profession === 'químico'
    );
    const listItems = chemists.map(person =>
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.acomplishment}
            </p>
        </li>
    );
    return <ul>{listItems}</ul>;
}