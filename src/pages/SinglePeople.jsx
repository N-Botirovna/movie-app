import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SinglePeople() {
  const { id } = useParams();
  const [state, setState] = useState({
    isFetched: false,
    data: {},
    error: false
  })
  console.log(id);
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/person/${id}`, {
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

    <>
    {
      <>
      <div className="container flex pr- gap-10  p-4 mx-auto  bg-gray-900 ">
      <div className="img-div w-1/5">
        <img className="rounded w-full" src={`https://image.tmdb.org/t/p/w500/${state.data.profile_path}`} alt="img" />
        <div className="flex items-center justify-center gap-5">
        <i className="uil uil-instagram-alt text-white text-3xl"></i>
        <i className="uil uil-twitter-alt text-white text-3xl"></i>
        </div>
      </div>
      <div className="right-div w-1/3">
        <h1 className="text-4xl text-white text-bold mb-9">{state.data.name}</h1>
        <h4 className="text-white text-bold text-2xl mb-3">Biography</h4>
        <p className="text-white  mb-4">{state.data.biography}</p>
        
    <span className="text-white">
      <h3>Known for:</h3>
      <p>{state.data.known_for_department}</p>
    </span>
      </div>
    </div>
    
    
    
      </>
    

    }
    </>

  );
}

export default SinglePeople;