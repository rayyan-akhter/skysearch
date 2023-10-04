import React from "react";
import "./style.css";
import { Paper } from "../UI/Paper";
import data from "../../assets/data.json";
import { useWindowSize } from "../../hooks/useWindowSize";
import { TicketCard } from "../ticketCard";
export function Content({ filters }) {
  const { isMobile } = useWindowSize();
  const isOriginFiltered = filters.origin !== null;
  const isDestinationFiltered = filters.destination !== null;
  const isDepartureDateFiltered = filters.departureDate !== null;
  const isReturnDateFiltered = filters.returnDate !== null;
  const isSliderFiltered = filters.slider !== null;

  const filteredData = data.filter((item) => {
    if (
      isOriginFiltered &&
      item.origin_name?.toLowerCase() !== filters.origin.value?.toLowerCase()
    ) {
      return false;
    }
    if (
      isDestinationFiltered &&
      item.departure_name?.toLowerCase() !==
        filters.destination.value?.toLowerCase()
    ) {
      return false;
    }
    if (
      isDepartureDateFiltered &&
      item.departureDate !== filters.departureDate
    ) {
      return false;
    }
    if (isReturnDateFiltered && item.returnDate !== filters.returnDate) {
      return false;
    }
    if (isSliderFiltered && item.price > filters.slider) {
      return false;
    }
    return true;
  });

  return (
    <section className="content">
      <Paper className="contentContainer">
        <div className={`contentHead ${isMobile ? "responsive" : ""}`}>
          <div className="placeNames">
            {
              <h1>
                {filters.origin || filters.destination ? (
                  <>
                    <span>{filters.origin ? filters.origin.label : ""}</span>
                    <span>
                      {filters.destination
                        ? `  >  ${filters.destination.label}`
                        : ""}
                    </span>
                  </>
                ) : (
                  "Availabe Flights"
                )}
              </h1>
            }
          </div>
          <div className="dateContainer">
            {filters.departureDate && (
              <p>{`Departure: ${filters.departureDate.toLocaleDateString()}`}</p>
            )}
            {!filters.oneWay && filters.returnDate && (
              <p>{`Return: ${filters.returnDate.toLocaleDateString()}`}</p>
            )}
          </div>
        </div>
        <div className="contentBody">
        {filteredData.length === 0 ? (
            <h2>No available flights</h2>
          ) : (
            filteredData.map((ticketDetail) => (
              <TicketCard key={ticketDetail.id} obj={ticketDetail} />
            ))
          )}
        </div>
      </Paper>
    </section>
  );
}
