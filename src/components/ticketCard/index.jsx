import React from "react";
import flight from "../../assets/skySearchLogo.jpg";

export function TicketCard({ obj, isMobile }) {
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
          <button>Book this Flight</button>
        </div>
      </div>
      <div className="ticketAction">
        <img src={flight} alt="flight" />
      </div>
    </div>
  );
}
