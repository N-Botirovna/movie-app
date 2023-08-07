import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleMovie() {
  const { id } = useParams();
  const [state, setState] = useState({
    isFetched: false,
    data: {},
    error: false
  })
  console.log(id);
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
      params: {
        api_key: "73df91be0207f3781d23f57661e285b5",
      },
    })
      .then((res) =>
        setState({
          isFetched: true,
          data: res.data,
          err: false,
        })
          .catch(err => {
            setState({
              isFetched: true,
              data: {},
              error: true
            })

          })
      );

  }, [])
  console.log(state.data);

  return (
    <div className="container flex pr- gap-10  p-4 mx-auto  bg-gray-900 ">


      {
        <>
          <div className="img-div w-1/3">
            <img className="rounded w-full" src={`https://image.tmdb.org/t/p/w500/${state.data.backdrop_path}`} alt="img" />
          </div>
          <div className="right-div w-1/3 pr-6 text-white">
            <h1 className=" text-5xl mb-2 text-bold">{state.data.title}</h1>
            <span>{state.data.release_date}</span>
            <span className="flex items-center justify-between mt-10 gap-10">
              <span className="text-sm  transform translate-x-1 translate-y-1">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center">
                  <div className="border-b-4 border-l-4 border-dotted border-yellow-500 rounded-full w-14 h-14 flex items-center justify-center">
                    <span className="text-yellow-800 font-bold text-lg ">{state.data.vote_average}</span>
                  </div>
                </div>
              </span>
              <span className="text-bold text-xl">User <br /> Score</span>
              <span className="bg-blue-800 rounded-full p-3 w-12 h-12 flex items-center justify-center"><i class="uil uil-bars"></i></span>
              <span className="bg-blue-800 rounded-full p-3 w-12 h-12 flex items-center justify-center"><i class="uil uil-heart-sign"></i></span>
              <span className="bg-blue-800 rounded-full p-3 w-12 h-12 flex items-center justify-center"><i class="uil uil-bookmark-full"></i></span>
              <span className="bg-blue-800 rounded-full p-3 w-12 h-12 flex items-center justify-center"><i class="uil uil-favorite"></i></span>
              <span className="text-white"><i class="uil uil-play"></i>Play trailer</span>
            </span>
            <p className="mt-5 mb-7 text-sm text-gray-400"><i>{state.data.tagline}</i></p>
            <h3 className="text-2xl mb-4 text-bold">Overview</h3>
            <p className="text-gray-300">{state.data.overview}</p>
            <div className="bottom-div flex items-center gap-40 mt-5 mb-2 text-bold">
            <div>
              <p className="text-2xl text-bold">Budget:</p>
              <p>{state.data.budget}</p>
            </div>
            <div>
              <p className="text-2xl text-bold">Language:</p>
              <p>{state.data.original_language}</p>
            </div>
            </div>
          </div>
        </>
      }
    </div>
  )

}

export default SingleMovie;