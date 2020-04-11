import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const LoginForm = () => {
  return (
    <Form>
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Choose your username" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;
