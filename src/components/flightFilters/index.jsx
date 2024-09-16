import React, { useState } from "react";
import { Paper } from "../UI/Paper";
import Select from "react-select";
import DatePicker from "react-datepicker";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { getApiUrl, debounce, marks } from "../sidebar";

export function  FlightFilters({ isReturn, filters, setFilters }) {
  const [origin, setOrigin] = useState(null);
  const [destinationText, setDestinationText] = useState(null);
  const [optionsForOrigin, setOptionsForOrigin] = useState([]);
  const [optionsForDestination, setOptionsForDestination] = useState([]);



  async function fetchData(text, setOptions) {
    try {
      const response = await fetch(getApiUrl(text));

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const data = await response.json();
      const mappedOptions = data.features.map((feature) => ({
        value: feature.properties.city || feature.properties.state,
        label: feature.properties.formatted,
      }));
      setOptions(mappedOptions);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handleOriginTextChange = (text) => {
    debounce(() => {
      setOrigin(text);
      fetchData(text, setOptionsForOrigin);
    }, 500)();
  };

  const handleDestinationTextChange = (text) => {
    debounce(() => {
      setDestinationText(text);
      fetchData(text, setOptionsForDestination);
    }, 500)();
  };

  return (
    <Paper padding="30px" className="sidebarPaper" borderRadius={0}>
      <form className="filter">
        <Select
          value={filters.origin}
          onInputChange={handleOriginTextChange}
          isSearchable={true}
          placeholder="Enter Origin City"
          options={optionsForOrigin}
          onChange={(option) => setFilters((prev) => ({
            ...prev,
            origin: option,
          }))}
          isClearable={true}
          className="dropdown" />
        <Select
          value={filters.destination}
          onInputChange={handleDestinationTextChange}
          isSearchable={true}
          placeholder="Enter Destination City"
          options={optionsForDestination}
          className="dropdown"
          isClearable={true}
          onChange={(option) => setFilters((prev) => ({
            ...prev,
            destination: option,
          }))} />
        <DatePicker
          className="datePicker"
          placeholderText="Enter Departure Date"
          selected={filters.departureDate}
          dateFormat="yyyy-MM-dd"
          onChange={(date) => {
            setFilters((prev) => ({
              ...prev,
              departureDate: date,
            }));
          }} />
        {isReturn && (
          <DatePicker
            className="datePicker"
            placeholderText="Enter Return Date"
            selected={filters.returnDate}
            onChange={(date) => {
              setFilters((prev) => ({
                ...prev,
                returnDate: date,
              }));
            }}
            format="dd/MM/yyyy" />
        )}
      </form>
      <form>
        <Box className="sliderContainer">
          <h3 className="text-light sideBarHeading">Price</h3>
          <Slider
            valueLabelDisplay="auto"
            step={5000}
            value={filters.slider}
            marks={marks}
            min={10000}
            max={150000}
            onChange={(event) => {
              setFilters((prev) => ({
                ...prev,
                slider: event.target.value,
              }));
            }} />
        </Box>
      </form>
    </Paper>
  );
}
