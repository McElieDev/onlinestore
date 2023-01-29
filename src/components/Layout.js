import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Layout(props) {
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg" className="d-flex pt-2">
        <Container>
          <Navbar.Brand
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            Rich-@-Store
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Nav
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
            // activeKey="/home"
            //onSelect={(selectedKey) => alert(`selected ${selectedKey}`)} lg-start
          >
            <Nav.Item className="active">
              <Nav.Link onClick={() => navigate("/home")}>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => navigate("/clothing")}>
                Clothing
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => navigate("/beauty")}>Beauty</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => navigate("/fast-food")}>Food</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <Container>{props.children}</Container>
    </>
  );
}

export default Layout;
