import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <header className="container mx-auto flex justify-between items-center h-16 bg-gray-900 text-white shadow-sm sticky z-10 inset-0">
      <div className="flex items-center">
        <Link to="/">
          <img src="../../assets/images/png/myLogo.png" alt="Logo" className=" ml-4  h-[65px]" />
        </Link>
      </div>
      <nav className="mr-4">
        <ul className="flex">
          <li className="ml-4">
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          </li>
          <li className="ml-4">
            <Link to={`/movie/${id}`} className="text-white hover:text-gray-300">Movie</Link>
          </li>
          <li className="ml-4">
            <Link to={`/tv/${id}`} className="text-white hover:text-gray-300">TvShows</Link>
          </li>
          <li className="ml-4">
            <Link to={`/people/${id}`} className="text-white hover:text-gray-300">People</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;




// import React from 'react';
// import { Link } from 'react-router-dom';

// function Header() {
//   return (
//     <header className="container flex justify-between items-center h-16 bg-white text-black shadow-sm">
//       <div className="flex items-center">
//         <Link to="/">
//           <img src="../../assets/images/svg/logo.svg" alt="Logo" className="h-8 ml-4 w=[236px] h=[26px] " />
//         </Link>
//       </div>
//       <nav className="mr-4">
//         <ul className="flex">
//           <li className="ml-4">
//             <Link to="/">Home</Link>
//           </li>
//           <li className="ml-4">
//             <Link to="/movie">Movie</Link>
//           </li>
//           <li className="ml-4">
//             <Link to="/tv">Tv</Link>
//           </li>
//           <li className="ml-4">
//             <Link to="/people">People</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;