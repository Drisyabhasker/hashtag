import React from 'react';
import './App.css';
import {Navbar,Nav,NavDropdown,Container,Form,FormControl,Button} from 'react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from './logo1.jpeg'
import Signup from './component/Signup'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {ListProvider} from './Context/Context'
import Header from './Header/Header'
import Signin from './component/Signin'
import { left, right } from '@popperjs/core';
function App() {
  return (
    <Router>
    <div className="App">
     
    <Navbar bg="dark"  >
  <Navbar.Brand href="#" style={{color: "white"}}></Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
  
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      
      </Navbar.Brand>
    
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      
    >
      <Nav.Link href="/sign-up" className="fontcolor" style={{color: "white"}}>FAN SIGN UP</Nav.Link>
      <Nav.Link href="/sign-in" style={{color: "white"}}>TALENT SIGN UP</Nav.Link>
      
      
    </Nav>
    <Form className="d-flex" style={{align:right}}>
      <FormControl 
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success" style={{color: "white"}}>Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>



    <ListProvider>
      <Route exact path='/' component={Signup} />
      <Route exact path='/sign-up' component={Signup} />
      <Route exact path='/sign-in' component={Signin} />
      </ListProvider>
    </div>
    
    </Router>
  );
  
}

export default App;
