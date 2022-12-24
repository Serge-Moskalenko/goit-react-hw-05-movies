import { Routes, Route } from "react-router-dom";
import { Home } from './Home/Home';


export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      {/* <Route path='/movies' element={Movies} />
      <Route path='/movies/:movieId' element={MovieDetails} >
        <Route path='cast' element={Cast} />
        <Route path='reviews' element={Reviews} />
      </Route> */}
    </Routes>
  );
};

  // api_key= '411d08d89a4569fb1b50aec07ee6fb72'


// '/' - компонент Home, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент Movies, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент MovieDetails, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице MovieDetails.
// /movies/:movieId/reviews - компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails.