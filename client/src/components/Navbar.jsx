import React from 'react';
import { Navbar, NavDropdown, Nav, Form, Button, FormControl } from 'react-bootstrap'

const NavBar = () => {
  return (
    <div>
      <Navbar variant="dark" bg="dark" expand="lg">
        <Navbar.Brand href="/Home">YouTube-Like App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Categories</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">New Category</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Videos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Videos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">New Video</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button variant="outline-danger" className="mr-sm-2">Login</Button>
          <Button variant="outline-danger" className="mr-sm-2">Logout</Button>
          <Button variant="danger" className="mr-sm-3">Register</Button>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default NavBar;
