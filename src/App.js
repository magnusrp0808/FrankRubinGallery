import React, { useEffect, useState } from 'react';
import "./styles.css";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";


import Main from './Main'

function MakeNavBar(props) {

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);

  const active = 'active';

  return(
  <Navbar className="navbar" sticky="top" bg="white">
      <Container>
        <Link to="/">
          <Navbar.Brand className="text-uppercase font-weight-bold">Frank Rubin</Navbar.Brand>
        </Link>
        <Nav className="justify-content-end">
          <Link to="/" className="nav-link text-uppercase font-weight-bold">Gallery<span className="sr-only">(current)</span></Link>
          <Link to="/about" className="nav-link text-uppercase font-weight-bold">About</Link>
          <Link to="/contact" className="nav-link text-uppercase font-weight-bold">Contact</Link>
        </Nav>
      </Container>
  </Navbar>
  );
}

export default function App() { 
  return (
    <div className="App">
      <MakeNavBar />
      <Main />
    </div>
  );
}
