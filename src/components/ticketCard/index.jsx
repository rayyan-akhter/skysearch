import React, { useState } from "react";
import flight from "../../assets/skySearchLogo.jpg";
import { useWindowSize } from "../../hooks/useWindowSize";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import { AiOutlineClose } from 'react-icons/ai';


export function TicketCard({ obj }) {
  const { isMobile } = useWindowSize();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      
      <IconButton
      sx={{color:"white"}}
        aria-label="close"
        
        onClick={handleClose}
      >
        <AiOutlineClose size={15} />
      </IconButton>
    </React.Fragment>
  );
  return (
    <div className={`ticketsCard ${isMobile ? "mobile" : ""}`}>
      <div className="ticketInfo">
        <h2 className="ticketPrice">Rs {obj.price}</h2>
        <div className="ticketDetails">
          <div className="ticket number">
            <p>{obj.origin_id}</p>
            <p>{obj.departure_id}</p>
          </div>
          <div className="ticket locations">
            <p>{`${obj.airport_destination} > ${obj.airport_origin}`}</p>
            <p>{`${obj.airport_origin} > ${obj.airport_destination}`}</p>
          </div>
          <div className="ticket departureTime">
            <p>{obj.arrival_time}</p>
            <p>{obj.return_departure_time}</p>
          </div>
          <div className="ticket arrivalTime">
            <p>{obj.departure_time}</p>
            <p>{obj.return_arrival_time}</p>
          </div>
          <button className="bookBtn" onClick={handleClick}>Book This  Flight</button>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="This feature ain't available right now"
        action={action}
        
      />
        </div>
      </div>
      <div className="ticketAction">
        <img src={flight} alt="flight" />
      </div>
    </div>
  );
}
