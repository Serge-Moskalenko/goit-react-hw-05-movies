import { useState, useEffect } from 'react';
import {  useLocation } from 'react-router-dom';
import { SearchMovies } from 'components/SearchMovies/SearchMovies';
import { ApiServise } from 'ApiServise';
import { MoviesGalery } from 'components/MoviesGalery/MoviesGalery';

const Api = new ApiServise();

export const Movies = () => {
    const [searchMovies, setSearchMovies] = useState(null);
    const [movie, setMovie] = useState(null);
    const location = useLocation();


     const queryParameter = q => {   
    if (searchMovies !== q) {
      setSearchMovies(q);
    }
    };

    useEffect(() => {
        if (searchMovies) {
            Api.fetchMovie(searchMovies).then(({ data:{results} }) => { setMovie(results) })
            }
    }, [searchMovies])
    
    return (<main>
        <div>
            <SearchMovies query={queryParameter} />
            {movie && <MoviesGalery data={movie} location={location} />}
        </div>
     
    </main>);
};

export default Movies
