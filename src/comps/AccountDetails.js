import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Modal, Button } from 'react-bootstrap';

const AccountDetails = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { authenticated, account } = useAuth();

  return (
    <>
      {authenticated && (
        <Button className='col-but' onClick={handleShow}>
          {' '}
          Account{' '}
        </Button>
      )}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Account Details</Modal.Title>
        </Modal.Header>
        {account && (
          <Modal.Body>You are signed in as {account.email}</Modal.Body>
        )}
        <Modal.Footer>
          <Button variant='danger' onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AccountDetails;
