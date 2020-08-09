import React from 'react';
import { Button } from 'react-bootstrap';
import { projectAuth } from '../firebase/config';
import useAuth from '../hooks/useAuth';

const Logout = () => {
  const { authenticated } = useAuth();
  const userLogout = (e) => {
    e.preventDefault();
    projectAuth.signOut();
  };

  return (
    <div>
      {authenticated && (
        <Button variant='danger' onClick={(e) => userLogout(e)}>
          Logout
        </Button>
      )}
    </div>
  );
};

export default Logout;
