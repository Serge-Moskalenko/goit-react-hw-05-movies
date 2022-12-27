import { useState} from 'react';
import {  useLocation, useSearchParams } from 'react-router-dom';
import { SearchMovies } from 'components/SearchMovies/SearchMovies';
import { ApiServise } from 'ApiServise';
import { MoviesGalery } from 'components/MoviesGalery/MoviesGalery';

const Api = new ApiServise();

export const Movies = () => {
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('query') ?? '';

    const queryParameter = q => {
        if (searchQuery !== q) {
            setSearchParams(q !== '' ? { query: q } : null);
        }
    };

    if (searchQuery !== '') {
       Api.fetchMovie(searchQuery).then(({ data: { results } }) => { setMovie(results) });
    };

    return (<main>
        <div>
            <SearchMovies query={queryParameter} input={searchQuery} />
            {movie && <MoviesGalery data={movie} location={location} />}
        </div>
     
    </main>);
};

export default Movies
