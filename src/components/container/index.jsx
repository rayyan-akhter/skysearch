import React from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Content } from "../content";
import { Sidebar } from "../sidebar";
import "./style.css";

export const Container = ({ filters, setFilters }) => {
  const { isMobile } = useWindowSize();

  return (
    <div className="d-flex container">
      {!isMobile && <Sidebar filters={filters} setFilters={setFilters} />}
      <Content filters={filters} />
    </div>
  );
};
