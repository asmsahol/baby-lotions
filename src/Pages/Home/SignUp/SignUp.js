/** @format */

import React, { useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const SignUp = () => {
  const { error, user, createNewUser, isLoading } = useAuth();
  const history = useHistory();
  const [loginData, setLoginData] = useState({});

  const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleRegistration = e => {
    e.preventDefault();
    if (loginData.password !== loginData.password2) {
      alert("Your password didn't match.");
      return;
    }
    createNewUser(loginData.email, loginData.password, loginData.name, history);
  };
  return (
    <Container>
      <Row className='baby_lotion_reg'>
        <Col className='product'>
          <img src='https://i.postimg.cc/KYbKy4LL/baby-lotion.jpg' alt='' />
        </Col>
        <Col className='baby_lotion'>
          {user?.email && !isLoading && (
            <Alert variant='success'>
              <Alert.Heading>Hey, Create Account Successfully</Alert.Heading>
            </Alert>
          )}
          {!isLoading && (
            <Form onSubmit={handleRegistration}>
              <Row className='mb-3'>
                <Form.Group as={Col}>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    name='name'
                    onChange={handleOnChange}
                    placeholder='Enter Your Name'
                    suggested
                  />
                </Form.Group>
              </Row>
              <Row className='mb-3'>
                <Form.Group as={Col} controlId='formGridEmail'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type='email'
                    name='email'
                    onChange={handleOnChange}
                    placeholder='Enter email'
                    suggested
                  />
                </Form.Group>
              </Row>
              <Row className='mb-3'>
                <Form.Group as={Col} controlId='formGridPassword'>
                  <Form.Label suggested='true'>Password</Form.Label>
                  <Form.Control
                    type='password'
                    name='password'
                    onChange={handleOnChange}
                    placeholder='Type Password'
                    suggested
                  />
                </Form.Group>
              </Row>
              <Row className='mb-3'>
                <Form.Group as={Col}>
                  <Form.Label suggested='true'>Password</Form.Label>
                  <Form.Control
                    type='password'
                    name='password2'
                    onChange={handleOnChange}
                    placeholder='Retype Password'
                    suggested
                  />
                </Form.Group>
              </Row>

              <Button className='my_button' type='submit'>
                Register
              </Button>
              <br />
              <br />
              <Row>
                <Form.Group className='mb-5' id='formGridCheckbox'>
                  <Link to='/login'>Already Register?</Link>
                </Form.Group>
              </Row>
            </Form>
          )}
          {isLoading && <Spinner animation='border' variant='secondary' />}
          {error && <h2>{error}</h2>}
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
