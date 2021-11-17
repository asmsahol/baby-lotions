/** @format */

import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar>
        <Container className='nav_top'>
          <Navbar.Brand className='brand mt-0' to='/home'>
            <h2 className='site_title'>Baby Lotion</h2>
          </Navbar.Brand>
          <Nav className='nav_right'>
            {!user?.email && (
              <Nav.Link className='mt-2'>
                <Link className='menu' to='/signup'>
                  Sign Up
                </Link>
              </Nav.Link>
            )}
            {!user?.email && (
              <Nav.Link className='mt-2'>
                <Link className='menu' to='/login'>
                  Log In
                </Link>
              </Nav.Link>
            )}
            {user?.email && (
              <Nav.Link className='mt-2'>
                <Link className='menu' to='/dashboard'>
                  Dashboard
                </Link>
              </Nav.Link>
            )}
            {user?.email && (
              <Nav.Link className='mt-2'>
                <Link className='logout menu' onClick={logOut}>
                  Log Out
                </Link>
              </Nav.Link>
            )}
            {user?.email && (
              <Nav.Link eventKey='disabled' disabled>
                <div className='login-name mt-2 text-secondary'>
                  <p>Login as {user?.displayName}</p>
                  <img className='login-photo' src={user?.photoURL} alt='' />
                </div>
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
      <Navbar className='nav_bar' variant='dark'>
        <Container>
          <Nav className="variant='pills' defaultActiveKey='/home'">
            <Nav.Link className='my-nav-link'>
              <Link className='menu' to='/home'>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='menu' to='/products'>
                Products
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='menu' to='/about'>
                About Us
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
