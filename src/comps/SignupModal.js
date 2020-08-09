import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { projectAuth } from '../firebase/config';

const SignupModal = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const formSubmit = (e, email, password) => {
    e.preventDefault();
    projectAuth.createUserWithEmailAndPassword(email, password);
    setEmail('');
    setPassword('');
    handleClose();
  };
  const onChangeHandler = (e) => {
    const { name, value } = e.currentTarget;
    if (name === 'userEmail') {
      setEmail(value);
    } else if (name === 'userPassword') {
      setPassword(value);
    }
  };

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Signup
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => formSubmit(e, email, password)}>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={email}
                name='userEmail'
                type='email'
                placeholder='Enter email'
                onChange={(e) => onChangeHandler(e)}
              />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                name='userPassword'
                type='password'
                placeholder='Password'
                onChange={(e) => onChangeHandler(e)}
              />
            </Form.Group>
            {/* <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
            <Button variant='primary' type='submit'>
              Signup
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SignupModal;
