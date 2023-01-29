import React from "react";
import { Container } from "react-bootstrap";
import Searchbox from "../components/Searchbox";

function Home(props) {
  return (
    <>
      <Container>
        <Searchbox></Searchbox>
      </Container>
    </>
  );
}

export default Home;
