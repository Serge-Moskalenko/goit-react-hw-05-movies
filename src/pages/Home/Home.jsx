import { useLocation } from "react-router-dom";
import { ApiServise } from "ApiServise";
import { useState, useRef } from "react";
import { MoviesCard } from "components/MoviesCard/MoviesCard";


const Api = new ApiServise();


export const Home = () => {

    const [movies, setMovies] = useState(null);
    const isMounted = useRef(false);
    const location = useLocation();

    if (!isMounted.current) {
        async function request() {
            const { data } = await Api.fetchDefault();
            setMovies(data)
        };
        isMounted.current = true;
        request()
    };

    return (
        <main>

            <section>
                <h1>Trending todey</h1>
                {movies && <MoviesCard data={movies} location={location} />}
            </section>
        </main>
    )
};

export default Home