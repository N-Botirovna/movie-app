
import React, { useEffect, useRef } from 'react';
import { Rerousel } from 'rerousel';
import './ProductCarousel.css';
import MovieCard from './MovieCard/MovieCard'
import { useState } from 'react';
import axios from 'axios';
const ProductCarousel = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (cardRef.current) {
        cardRef.current.next();
      }
    }, 500); //

    return () => {
      clearInterval(interval);
    };
  }, []);
  
  const [state, setState] = useState({
    isFetched: false,
    data: [],
    error: false
  })
  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular', {
      params: {
        api_key: "73df91be0207f3781d23f57661e285b5",
      }
    })
      .then(res => res)
      .then((data) => {
        setState({
          isFetched: true,
          data: data.data.results,
          error: false
        }).catch(err => {
          setState({
            isFetched: true,
            data: [],
            error: true
          })
        })
      })

  }, [])
  console.log(state.data);

  return (
    <div className="carousel-container">
      
      <Rerousel>
        {state?.data?.map((movie) => (
          <div className="myDiv" >
            <MovieCard ref={cardRef} id={movie.id} key={movie.id} title={movie.title} rating={movie.vote_average} date={movie.release_date} img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} /> 
          </div>
        ))}
      </Rerousel>
    </div>
  );
};

export default ProductCarousel;