import React from 'react'
import { useParams } from 'react-router-dom'
import { movieContext } from './contexts/movieContext';
import { useContext } from 'react';
const Trailer = () => {
  const {movieId} = useParams();
  const myMovies = useContext(movieContext)
  const mymovie = myMovies.find((m) => {

    return (<div>
      {m.id === movieId}
      
    </div>) 
   
  })
  return (<>
    <h1>{mymovie.description}</h1>
      <h1>{mymovie.title}</h1>
  
  </>)
}

export default Trailer