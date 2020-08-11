import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import SignupModal from './SignupModal';
import Logout from './Logout';
import LoginModal from './LoginModal';
import AccountDetails from './AccountDetails';

const Title = () => {
  return (
    <div className='title'>
      <Navbar className='container Navbar' variant='dark' expand='md'>
        <Navbar.Brand href='#home'>
          <img
            alt=''
            src='/instagram.svg'
            width='30'
            height='30'
            className='d-inline-block align-top'
          />{' '}
          FireGram{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Item className='container mb-2 mt-2'>
              <SignupModal />
            </Nav.Item>
            <Nav.Item className='container mb-2 mt-2'>
              <LoginModal />
            </Nav.Item>
            <Nav.Item className='container mb-2 mt-2'>
              <AccountDetails />
            </Nav.Item>
            <Nav.Item className='container mb-2 mt-2'>
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
