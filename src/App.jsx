import { useState } from "react";
import "./App.css";
import { Container } from "./components/container";
import { Header } from "./components/header";

function App() {
  const [filters, setFilters] = useState({
    origin: null,
    destination: null,
    departureDate: null,
    returnDate: null,
    slider: null,
    oneWay: true,
  });
  return (
    <main className="d-flex flex-column">
      <Header filters={filters} setFilters={setFilters} />
      <Container filters={filters} setFilters={setFilters} />
    </main>
  );
}

export default App;
