import MovieCard from './MovieCard';
import MovieList from './MovieList';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Filter from './Filter';
import { useState } from 'react';
import AddMovie from './AddMovie';
import { Routes,Route,Link } from 'react-router-dom';
import Trailer from './Trailer';
import { movieContext } from './contexts/movieContext'; 
import NotFound from './NotFound';

function App() {
  let movieData=[{
        id:uuidv4(),
        title: "mission impossible 1",
        description:"action movie",
        rating:5,
        posteUrl: "https://cdn.lesnumeriques.com/optim/product/73/73651/c7b8c45c-mission-impossible-dead-reckoning-partie-1__1200_675__2-0-1085-610.jpg",
        trailerLink:"https://www.youtube.com/watch?v=9JoOSfYV4Ac&ab_channel=TheBunch"
  }, {
        id:uuidv4(),
        title: "mission impossible 2",
        description:"action movie",
        rating:2.3,
        posteUrl: "https://cdn.lesnumeriques.com/optim/product/73/73651/c7b8c45c-mission-impossible-dead-reckoning-partie-1__1200_675__2-0-1085-610.jpg",
        trailerLink:"https://www.youtube.com/watch?v=kc3mCcVyIp4&ab_channel=SonyPicturesEntertainment"
    }]
  const [movies, setMovies] = useState([{
        id:uuidv4(),
        title: "mission impossible 1",
        description:"action movie",
        rating:5,
        posteUrl: "https://cdn.lesnumeriques.com/optim/product/73/73651/c7b8c45c-mission-impossible-dead-reckoning-partie-1__1200_675__2-0-1085-610.jpg",
        trailerLink:"https://www.youtube.com/watch?v=9JoOSfYV4Ac&ab_channel=TheBunch"
  }, {
        id:uuidv4(),
        title: "mission impossible 2",
        description:"action movie",
        rating:2.3,
        posteUrl: "https://cdn.lesnumeriques.com/optim/product/73/73651/c7b8c45c-mission-impossible-dead-reckoning-partie-1__1200_675__2-0-1085-610.jpg",
        trailerLink:"https://www.youtube.com/watch?v=kc3mCcVyIp4&ab_channel=SonyPicturesEntertainment"
    }]);
  const [rateFilter, setRateFilter] = useState(0);
  const [titleFilter, setTitleFilter] = useState("");
  return (
   
    <movieContext.Provider value={[movieData]}>
      <div className="App">
        < div style={{background:"gray"}}>
         <Link to="/home"><button style={{background:"blue"}}>home</button></Link>
       <Link to="/movies"><button style={{background:"blue"}}>movielist</button></Link>
       
        </div>
       
      <AddMovie setMovies={setMovies} movies={movies} />
      <Filter rateFilter={rateFilter } setRateFilter={setRateFilter} setTitleFilter={setTitleFilter} />
      <MovieList movies={movies.filter((movie, i)=>movie.title.toLowerCase().trim().includes(titleFilter.toLowerCase().trim())&& movie.rating>rateFilter)} /> 
       
        
      {/* routes */}
      <Routes>
        <Route path='/home' element={<App/> } />
        <Route path='/movies' element={<MovieList movies= {movies} /> } />
        <Route path="/movieDetails/:movieId" element={<Trailer /> } />
        {/* <Route path="*" element={<NotFound /> } /> */}
      </Routes>
    </div>
    </movieContext.Provider>
    
  );
}

export default App;
