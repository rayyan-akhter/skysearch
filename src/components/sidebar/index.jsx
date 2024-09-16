import Box from "@mui/material/Box";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import { FlightFilters } from "../flightFilters";

export function debounce(callback, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(callback, delay);
  };
}

export const getApiUrl = (search) =>
  `https://api.geoapify.com/v1/geocode/autocomplete?text=${search}&apiKey=1b48259b810e48ddb151889f9ea58db0&type=locality&limit=5`;

export const marks = [
  {
    value: 10000,
    label: "10000",
  },

  {
    value: 150000,
    label: "150000",
  },
];

export const Sidebar = ({ filters, setFilters, width }) => {
  const [activeTab, setActiveTab] = useState("1");

  const handleTabClick = (tabValue, oneWayValue) => {
    setActiveTab(tabValue);
    setFilters((prev) => ({
      ...prev,
      oneWay: oneWayValue,
    }));
  };

  return (
    <section className="sidebar" style={{ width }}>
      <TabContext value={activeTab}>
        <Box sx={{ borderBottom: 1, borderColor: "white" }}>
          <TabList aria-label="lab API tabs example">
            <Tab
              label="One Way"
              value="1"
              onClick={() => handleTabClick("1", true)}
            />
            <Tab
              label="Return"
              value="2"
              onClick={() => handleTabClick("2", false)}
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <FlightFilters
            isReturn={false}
            filters={filters}
            setFilters={setFilters}
          />
        </TabPanel>
        <TabPanel value="2">
          <FlightFilters
            isReturn={true}
            filters={filters}
            setFilters={setFilters}
          />
        </TabPanel>
      </TabContext>
    </section>
  );
};
