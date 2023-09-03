import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import '../styles/MovieDetails.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MovieDetails({movie}) {  
    
    const [showSeatSelection] = useState(false);
    const navigate = useNavigate();

    const handleBookSeatClick = () => {
        navigate('/seats')   
    };

    return (
        <> 
        {!showSeatSelection && (
        <div className='card-container'>   
            <div className='card-sub-container' >
                <Card sx={{ maxWidth: 390 }}> 
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div"> {movie.title ? movie.title?.slice(0,25): ""} </Typography>
                            <Typography variant="body2" color="text.secondary"> {movie.body ? movie.body?.slice(0, 75) : ""} </Typography> 
                         </CardContent>
                    </CardActionArea>

                    <div className='btn-container'> 
                    <div className='btn-sub-container'>   
                    <Button variant="contained" onClick={handleBookSeatClick} > Book Ticket </Button> 
                    </div>
                    </div>

                </Card>
            </div> 

        </div>

        )}

    </>
    );
}

export default MovieDetails;
