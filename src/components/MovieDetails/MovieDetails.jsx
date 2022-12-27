import { ApiServise } from 'ApiServise';
import { useState, useEffect, Suspense  } from 'react';
import { NavLink, useParams,Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Api = new ApiServise();


export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState();
  const location = useLocation();
  const url = 'https://image.tmdb.org/t/p/w500';
  const back = location.state?.from ?? '/';

  useEffect(() => {
    Api.fetchById(movieId).then(({ data }) => setMovies(data))
  }, [movieId]);

  return (
    <>
      <NavLink to={back}>Go back</NavLink>
      
      {movies && (
        <>
          <section>
            <h2>Movie details</h2>
            <img
              src={url + movies.poster_path}
              alt={movies.title}
              width={200}
            />
            <div style={{ display: "flex", flexDirection: "column" }} >
              <h3>
                {movies.title ? movies.title : 'Not title'}
                {new Date(movies.release_date).getFullYear()}
              </h3>
              <ul>
                <li>
                  <p>
                    <b>User score: </b>
                    {movies.vote_average.toFixed(2)}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Overview:</b> {movies.overview}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Genres:</b>
                    {` ${movies.genres.map(genre => genre.name).join(' , ')}`}
                  </p>
                </li>
              </ul>
            </div>
                        
          </section>

          <section>
            <h3>Additional information</h3>
            <ul>
              <li>
                <NavLink to="cast" state={{ from: back }}>
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink to="reviews" state={{ from: back }}>
                  Reviews
                </NavLink>
              </li>
            </ul>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </section>
        </>
      )}
    </>
  )
};

export default MovieDetails