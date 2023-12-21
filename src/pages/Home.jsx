import ProductCarousel from "../components/ProductCarousel";


function Home() {
  return (
    <>
      <div className="p-16 bg-gray-900 mx-20 home text-white font-bold h-[500px]">
        <h1 className="text-[65px] ">Welcome</h1>
        <p className="text-3xl">Millions of movies, Tv Shows and people to <br /> discover. Explore now</p>
        <form className="mt-10 relative w-full flex flex-grow ">
          <input className="w-full text-gray-600  py-3 px-6 rounded-3xl" type="text" placeholder="Search a movie, tvShow, person"/>
          <button className="w-1/8 absolute right-0 bg-blue-300 z-10 py-3 px-6 rounded-3xl">Search</button>
        </form>
      </div>
      <h2 className="text-3xl mx-20 font-bold">Trending</h2>
      <div className="mx-20">
        
      <ProductCarousel/>
      </div>
      
    </>
  );
}

export default Home;