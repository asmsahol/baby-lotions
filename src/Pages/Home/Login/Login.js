/** @format */

import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import "./Login.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { error, signInWithGoogle, processLogin, saveUser } = useAuth();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/home";
  const history = useHistory();
  const [loginData, setLoginData] = useState({});

  const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleEmailLogin = e => {
    e.preventDefault();
    processLogin(loginData.email, loginData.password);
    history.push(redirect_uri);
  };
  const handleGoogleLogin = () => {
    signInWithGoogle().then(result => {
      const user = result.user;
      saveUser(user.email, user.displayName, "PUT");
      history.push(redirect_uri);
    });
  };
  return (
    <Container className='w-50% login_from'>
      <Row className='baby_lotion_reg'>
        <Col className='product'>
          <img src='https://i.postimg.cc/KYbKy4LL/baby-lotion.jpg' alt='' />
        </Col>
        <Col>
          <Form onSubmit={handleEmailLogin}>
            <Form.Group
              as={Row}
              className='mb-3 login-mail'
              controlId='formGroupEmail'
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                suggested='true'
                type='email'
                name='email'
                placeholder='Enter email'
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                name='password'
                placeholder='Password'
                suggested='true'
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Button className='my_button' type='submit'>
                Log in
              </Button>
            </Form.Group>
            <br />
          </Form>
          <Form.Group className='mb-3'>
            <Button className='log_in_google' onClick={handleGoogleLogin}>
              Log in With Google
            </Button>
          </Form.Group>
          <br />
          <Form.Group className='mb-3'>
            <Link to='/signup'>New User?</Link>
          </Form.Group>
          {error && <h2>{error}</h2>}
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
