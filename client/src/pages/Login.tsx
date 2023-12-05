// Login.tsx

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginPageContainer = styled.div`
  background: linear-gradient(to right, #fff, #fff); /* White background */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 300px;
  text-align: center;
`;

const InputField = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #e4d813; /* Accent color */
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #f0c419; /* Darker accent color on focus */
  }
`;

const SubmitButton = styled.button`
  background-color: #e4d813; /* Accent color */
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 12px;
  width: 100%;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0c419; /* Darker accent color on hover */
  }
`;

const RegisterLink = styled(Link)`
  display: block;
  color: #e4d813; /* Accent color */
  margin-top: 10px;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #f0c419; /* Darker accent color on hover */
  }
`;

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <LoginForm>
        <h2>Login</h2>
        <InputField type="email" placeholder="Email" />
        <InputField type="password" placeholder="Password" />
        <SubmitButton type="submit">Log In</SubmitButton>
        <RegisterLink to="/register">
          Don't have an account? Register here
        </RegisterLink>
      </LoginForm>
    </LoginPageContainer>
  );
};

export default LoginPage;
