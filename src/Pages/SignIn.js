import React from "react";
import { useRef } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";

const SignIn = ({ signin }) => {
  const formRef = useRef();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: { email: data.email, password: data.password },
    };
    signin(userInfo);
    navigate("/");
    e.target.reset();
  };

  return (
    <>
      <div className="SignIn">
        <h2>Sign In</h2>
      </div>
      <div className="SignIn2">
        <Form innerRef={formRef} onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              name="email"
              placeholder="What is your email?"
              type="email"
            />
            <Label for="password">Password</Label>
            <Input
              name="password"
              placeholder="What is your password?"
              type="password"
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    </>
  );
};

export default SignIn;
