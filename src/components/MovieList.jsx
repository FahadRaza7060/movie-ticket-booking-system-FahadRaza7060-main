import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "../styles/MovieList.css";
import axios from "axios";
import { useState, useEffect } from "react";
// import MovieDetails from "./MovieDetails";
import { useNavigate } from "react-router-dom";

function MovieList({onFindMovieData}) {

  const navigate = useNavigate();

  const [movieData, setMovieData] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(""); 
  
  // console.log('all movies data', movieData);

  const handleMovieClick = (movie) => {
    // console.log("show selected movie data", movie);
    setSelectedMovie(movie);
    // use bottom up approach to get movie data in parent component
    onFindMovieData(movie); 
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // console.log('API Response', response); 
        setMovieData(response.data); 
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, [onFindMovieData]);

  return (
    <> 
       
      {selectedMovie ? (
      
      navigate("/movie-details")

      ) : ( 
        <>
          (
          <div className="movie-container"> 
            <h1> Recommended Movies </h1> 
          </div>
          <div className="card-container">
            {movieData.map((movie, index) => (
              <div className="card-sub-container" key={index}>
                <Card
                  sx={{ maxWidth: 345 }}
                  onClick={() => handleMovieClick(movie)}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {movie.title ? movie.title.slice(0, 25) : ""}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {movie.body ? movie.body.slice(0, 75) : ""}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            ))}
          </div>
          )
        </>
      )}
    </>
  );
}

export default MovieList;
