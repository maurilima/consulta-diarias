import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import GridDiaria from "./Components/GridDiaria";

function App() {
  return (
    <Container>
      <Header />
      <GridDiaria />

    </Container>
  );
}

export default App;
