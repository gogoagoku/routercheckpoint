import React, { useRef } from 'react'
import StarRatingComponent from 'react-star-rating-component';

const Filter = ({ rateFilter, setRateFilter, setTitleFilter }) => {
  const a = useRef();
  return (
    <div>
      <input type='text' placeholder=' title film  to find ' ref={a} onChange={() => setTitleFilter(a.current.value)}></input>
      <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rateFilter}
        onStarClick={(value) => {
            setRateFilter(value)
        }}
       
      />
    </div>
  )
}

export default Filter