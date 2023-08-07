import axios from 'axios';
import { useEffect, useState } from 'react';
import TvCard from '../components/TvCard/TvCard';

function Tv() {
  const [state, setState] = useState({
    isFetched: false,
    data: [],
    error: false
  })
  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/tv/popular', {
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
      <div className="container mx-auto grid grid-cols-4 p-4 mx-auto  bg-gray-900 gap-8">

        {
          state?.data?.map((movie) => (

            <TvCard id={movie.id} key={movie.id} title={movie.name} rating={movie.vote_average} date={movie.first_air_date
            } img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          ))
        }
      </div>
    </>
  );
}

export default Tv;