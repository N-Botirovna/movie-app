import axios from "axios"
import { useEffect, useState } from "react"
import PeopleCard from "../components/People.card/PeopleCard"

function People() {
  const [state, setState] = useState({
    isFetched: false,
    data: [],
    error: false
  })
  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/person/popular', {
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
      <h2 className="text-white bg-gray-900 container p-4 text-2xl text-bold mx-auto">Popular People</h2>
      <div className="container mx-auto grid grid-cols-4 p-4 mx-auto  bg-gray-900 gap-8">

        {
          state?.data?.map((person) => (

            <PeopleCard id={person.id} key={person.id} name={person.name} known={person.known_for_department} img={`https://image.tmdb.org/t/p/w500/${person.profile_path}`} />
          ))
        }
      </div>
    </>
  );
}

export default People;