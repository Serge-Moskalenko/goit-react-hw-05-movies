import {MoviesItem} from './MoviesItem'
import { ImageGalleryStyled } from "./ImageGallery.styled";
import { Link } from 'react-router-dom';

export const MoviesGalery= ({ data,location}) => {
    
    const url = 'https://image.tmdb.org/t/p/w500';

    return (<ImageGalleryStyled >{data.map(({ id, title, poster_path, release_date }) =>
        <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
        <MoviesItem
            
            id={id}
            path={url + poster_path}
            name={title}
            date={release_date}
            />
            </Link>
        
    )
        
    }</ImageGalleryStyled >)
};