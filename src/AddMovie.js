import React, { useRef } from 'react'
import { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { v4 as uuidv4 } from 'uuid';

const AddMovie = ({setMovies,movies}) => {
  const [rate, setRate] = useState(0);
  const x = useRef();
  const y = useRef();
  const z = useRef();
  const addNewMovie=() => {
    setMovies([...movies, {id:uuidv4(), title:x.current.value,description:y.current.value,posteUrl:z.current.value,rating:rate}]) 
  }
  return (
    <div>
      <input type='text' placeholder=' movie title'ref={x}></input>
      <input type='text' placeholder=' movie description'ref={y}></input>
      <input type='text' placeholder=' movie poster image link' ref={z}></input>
      <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rate}
        onStarClick={(value) => {
            setRate(value)
        }}
       
      />
       <button onClick={addNewMovie}>add movie</button>
    </div>
  )
}

export default AddMovie