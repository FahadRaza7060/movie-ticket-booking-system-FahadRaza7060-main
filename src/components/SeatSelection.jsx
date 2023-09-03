import React, { useEffect, useRef, useState } from "react";
import "../styles/SeatSelection.css";
import Button from '@mui/material/Button';
import BookingConfirmation from "./BookingConfirmation";
import Box from "./Box";

function SeatSelection({ movie }) {

  // console.log('movie data in seatSelection.jsx file', movie);

  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  
  // hook used to store seats in an array (selectedSeats is an array of integer values)

  const [selectedSeats, setSelectedSeats] = useState([]);
  // console.log('Integer Array values stored', selectedSeats);  

  const [storageArray, setStorageArray] = useState([]);

  // const [formData, setFormData] = useState({});
  const formDataRef = useRef({});

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("formData"))
    if (storedData) {
      // setEnteredName(storedData?.name || ""); 
      // setEnteredEmail(storedData?.email || ""); 
      setSelectedSeats(storedData?.selectedSeats || []); 
      setStorageArray(storedData?.selectedSeats || []);
    }
      
  }, []);

  const nameChangeHandler = (event) => { 
    setEnteredName(event.target.value);
  };

  const emailChangeHandler = (event) => {  
    setEnteredEmail(event.target.value);  
  };

  const formSubmit = (event) => { 
    event.preventDefault();
    formDataRef.current = { name: enteredName, email: enteredEmail, selectedSeats };
  
    localStorage.setItem('formData', JSON.stringify(formDataRef.current));   

    setEnteredName(''); 
    setEnteredEmail('');
  };

  return (
    <>
      <form onSubmit={formSubmit} >
          <div className="seat-container"> 
            <h1> {movie.title? movie.title?.slice(0, 25) : ""} </h1> 
          </div> 
          
          <div className="form-container">  
          <div className='form__controls'>
            <div className="form__inputcontrol">
              <label> Name </label>
              <input type="text" onChange={nameChangeHandler} value={enteredName} /> 
            </div>
            <div className="form__inputcontrol">
              <label> Email </label>
              <input type="email" onChange={emailChangeHandler} value={enteredEmail} />
            </div>
          </div>

        <div style={{display: 'flex', flexWrap: 'wrap'}} >
          {
            [...Array(50)].map((x, i) =>
            <Box key={i} x={i+1} setSelectedSeats={setSelectedSeats} selectedSeats={selectedSeats} storageArray={storageArray} />
            )          
          }
           
        </div> 
      
      <Button variant="contained" type="submit" style={{marginTop: 8}}> Submit </Button>  

  </div>
  </form>

  <BookingConfirmation movie={movie} formData={formDataRef.current} selectedSeats={selectedSeats} /> 

  </>
  );
}

export default SeatSelection;
