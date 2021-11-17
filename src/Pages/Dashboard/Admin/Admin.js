/** @format */

import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

const Admin = () => {
  const [email, setEmail] = useState("");
  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = e => {
    const user = { email };
    console.log(user);
    e.preventDefault();
    fetch("https://vast-ravine-14464.herokuapp.com/users/admin/", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {
        setEmail("");
      });
  };
  return (
    <Form onSubmit={handleAdminSubmit}>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={handleEmailChange}
          type='email'
          placeholder='Enter email'
        />
      </Form.Group>
      <Button className='my_button' variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
};

export default Admin;
