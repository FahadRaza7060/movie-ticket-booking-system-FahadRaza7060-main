import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../styles/BookingConfirmation.css";
import { Button } from "@mui/material";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function BookingConfirmation({ movie, formData, selectedSeats }) {
   
  // here I see selected seats data in the console
  // console.log('formData.selectedSeats', formData.selectedSeats);
  
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); 
  const [ticket, setTicket] = useState([]); 

  useEffect(() => {
    // console.log('form data', formData); 
    setName(formData.name);
    setEmail(formData.email); 
    setTicket(formData.selectedSeats); 
    
  }, [formData]); 

  const bookingHandler = () => {
    toast.success("Booking Confirm");
    setName(""); 
    setEmail(""); 
    setTicket();
    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));


    navigate("/");
  };

  return (
    <div className="card">
      <Card
        sx={{
          minWidth: 815,
          borderRadius: 3,
          padding: 2,
          backgroundColor: "#80b1e2",
        }}
      >
        <CardContent style={{ textAlign: "center" }}>
          <Typography variant="h4" component="div">
            Booking Confirmation
          </Typography>
        </CardContent>

        <CardContent style={{ textAlign: "center" }}>
          <Typography variant="h5" component="div">
            {movie.title ? movie.title?.slice(0, 25) : ""}
          </Typography>
        </CardContent>

        <CardContent style={{ textAlign: "start" }}>
          <Typography variant="p"> {name} </Typography>
        </CardContent>

        <CardContent style={{ textAlign: "start" }}>
          <Typography variant="p"> {email} </Typography>
        </CardContent>

        <CardContent style={{ textAlign: "start" }}>
          <Typography variant="p">
            {/* {JSON.stringify(formData.selectedSeats)} */}
            {JSON.stringify(ticket)}
          </Typography>
        </CardContent>


        <div className="booking-button">
          <Button variant="contained" onClick={bookingHandler}>
            Confirm Booking
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default BookingConfirmation;
