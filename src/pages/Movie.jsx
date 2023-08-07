import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import MovieCard from "../components/MovieCard/MovieCard";

function Movie() {

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
    <>
      <h2 className="text-white bg-gray-900 container p-4 text-2xl text-bold mx-auto">Popular Movies</h2>
      <div className="container mx-auto grid grid-cols-4 p-4 mx-auto  bg-gray-900 gap-8">

        {
          state?.data?.map((movie) => (

            <MovieCard id={movie.id} key={movie.id} title={movie.title} rating={movie.vote_average} date={movie.release_date} img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          ))
        }
      </div>
    </>
  );
}

export default Movie;

