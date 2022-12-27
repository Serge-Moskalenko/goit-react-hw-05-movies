import { Link } from "react-router-dom";

export const MoviesCard = ({ location, data: { results } }) => {
    return (<ul>{results.map(i => <li key={i.id}>
        <Link to={`/movies/${i.id}`} state={{ from: location }}>{i.title}</Link>
    </li>)}</ul>);
};
