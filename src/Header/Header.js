import React from 'react'
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg'
function Header() {
    return (
        
            <Navbar fixed="top" bg="black" expand="lg">
  <Container>
  
  
    <Navbar.Brand href="#home">
      <img
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>

  
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">SignUp</Nav.Link>
        <Nav.Link href="#link">Login</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    
    )
}

export default Header
