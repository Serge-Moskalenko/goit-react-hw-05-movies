import { ApiServise } from "ApiServise";
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";

const Api = new ApiServise();

export const Cast = () => {
    const { movieId } = useParams();
    const [actors, setActors] = useState(null);
    const url = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        Api.fetchCast(movieId).then(({data:{cast}}) => { setActors(cast) })
    }, [movieId]);
    
    return (
        <>
            {actors && (
                <ul>
                    {actors.map(({ id, name, profile_path, character }) => (
                        <li key={id}>
                            <img
                                src={url + profile_path}
                                alt={name}
                                width={200}
                            />
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                fontSize: '12px'
                            }}>
                                <b>{name}</b>
                                <p>
                                    <b>Character:</b> {character}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default Cast