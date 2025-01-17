
import React, { useState } from "react";
import { Navbar, Container, Button, InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearchBar = () => {
    setSearchVisible(!searchVisible);
  };
  return (
    <Navbar bg="light" expand="lg" className="custom-header">
      <Container fluid>
        {/* Logo or Brand */}
        <Navbar.Brand href="#" className="fw-bold">
        <Button variant="primary" className="me-2">
            Workplace
          </Button>
          <Button variant="warning">Documents</Button>
          
        </Navbar.Brand>

        {/* Right Section */}
        <div className="d-flex align-items-center">
          {/* Collapsible Search Bar */}
          {searchVisible && (
            <InputGroup className="search-bar me-3">
              <FormControl placeholder="Search..." />
              <Button variant="outline-secondary" onClick={toggleSearchBar}>
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </InputGroup>
          )}
          {!searchVisible && (
            <Button
              variant="outline-secondary"
              className="search-toggle-btn me-3"
              onClick={toggleSearchBar}
            >
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          )}

          {/* Notification Icon */}
          <Button variant="outline-primary" className="icon-btn me-3">
            <FontAwesomeIcon icon={faBell} />
          </Button>

          {/* Signup Icon */}
          <Button variant="outline-success" className="icon-btn me-3">
            <FontAwesomeIcon icon={faUser} />
          </Button>

          {/* Action Buttons */}
          
        </div>
      </Container>
    </Navbar>
  )
}

export default Header