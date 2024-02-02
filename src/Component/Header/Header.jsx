import React, { useState } from 'react';
import './Header.css';
import { Navbar, Nav,Row, NavDropdown, Form, FormControl, Button, Container, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
function Header() {
    let [input,setInput] = useState('')
  return (
    <Container fluid className='position-relative mb-3 bg-dark' style={{height:'77px'}}>
        <Navbar bg="dark" expand="lg" className="border-bottom position-fixed top-0 w-100 z-3" variant='dark'>
        <Navbar.Brand href="#home">
          <img
            alt="Amazon Logo"
            src={require(`./img/amazon.png`)}
            width="100"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Row className='w-100'>
        <Navbar.Collapse id="basic-navbar-nav">
            <Col lg={6}>
            <Form className="d-flex mx-2">
            <FormControl type="text" placeholder="Search" className="mr-2 outline-0" onChange={(e)=>{setInput(e.target.value)}} />
            <Button variant="outline-warning" as={Link} to={`/search/${input}`}><FaSearch /></Button>
          </Form>
            </Col>
            <Col lg={6}>
            <Nav className="me-auto ms-5">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/'>Today's Deals</Nav.Link>
            <NavDropdown title="Your Account" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to='/'>Your Account</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/'>Your Orders</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to='/'>Logout</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to='/Cart'>
              <i className="bi bi-cart3"></i> Cart
            </Nav.Link>
          </Nav>
            </Col>
        </Navbar.Collapse>
          </Row>
      </Navbar>
    </Container>
  )
}

export default Header