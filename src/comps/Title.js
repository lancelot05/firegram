import React from 'react';
import { Navbar } from 'react-bootstrap';

const Title = () => {
  return (
    <div className="title">
      <h1>
        <Navbar bg="danger" variant="dark">
          <Navbar.Brand href="/">
            FireGram
          </Navbar.Brand>
        </Navbar>
      </h1>
      <h2>Your Pictures</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  )
}

export default Title;