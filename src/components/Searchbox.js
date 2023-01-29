import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Searchbox(props) {
  const navigate = useNavigate();
  return (
    <>
      <Container bg="light" aria-expanded="false" className="pt-4">
        <Row>
          <Col></Col>
          <Col xs={6}>
            <Form className="d-flex" role="search" controlId="formSearching">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-primary"
                onClick={() => navigate(`/searcha-listing/${props.svalue}`)}
                type="button"
              >
                <i class="fa-duotone fa-magnifying-glass"></i>
              </button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default Searchbox;
