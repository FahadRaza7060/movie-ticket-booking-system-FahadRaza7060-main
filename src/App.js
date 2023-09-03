import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import SeatBookingConfirm from "./components/SeatBookingConfirm";
import MovieDetails from "./components/MovieDetails";


const App = () => {
  
  const [data, setData] = useState({});

  const findMovieData = (Movies) => {
    setData(Movies);  
  }

  return (
    <>
      <Toaster /> 
      <Routes>
        <Route path="/" element={<Home onFindMovieData={findMovieData}  />} />  
        <Route
          path="/movie-details" 
          element={<MovieDetails movie={data} />} />
        <Route path="/seats" element={<SeatBookingConfirm movie={data} />} />
      </Routes>
    </>
  );
};

export default App; 
