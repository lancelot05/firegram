import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import SignupModal from './SignupModal';
import Logout from './Logout';
import LoginModal from './LoginModal';

const Title = () => {
  return (
    <div className='title'>
      <Navbar bg='dark' variant='dark' expand='md'>
        <Navbar.Brand href='#home'>FireGram</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Item className='mt-2 mb-2 ml-5 mr-5'>
              <SignupModal />
            </Nav.Item>
            <Nav.Item className='mt-2 mb-2 ml-5 mr-5'>
              <LoginModal />
            </Nav.Item>
            <Nav.Item className='mt-2 mb-2 ml-5 mr-5'>
              <Logout />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <h2>Your Pictures</h2>
      <p>An simple attempt to make a CRUD application</p>
    </div>
  );
};

export default Title;
