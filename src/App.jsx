import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import { Home, Movie, People, SingleMovie, SinglePeople, SingleTv, Tv } from './pages';


function App() {
  
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/tv/:id" element={<Tv />} />
        <Route path='/people/:id' element={<People/>} />
        <Route path='/single-movie/:id' element={<SingleMovie/>}/>
        <Route path='/single-tv/:id' element={<SingleTv/>}/>
        <Route path='/single-people/:id' element={<SinglePeople/>}/>
      </Routes>
    </Router>
  );
}

export default App;

