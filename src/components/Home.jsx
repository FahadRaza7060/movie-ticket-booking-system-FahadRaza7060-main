import React from 'react';
import DenseAppBar from './Navbar';
import MovieList from './MovieList';

function Home({onFindMovieData}) {

  return (
    <>
    {/* This is Home component which holds Navbar and Movie List component */} 
    <DenseAppBar  />
    <MovieList onFindMovieData={onFindMovieData} />
    </>
  )
}

export default Home;