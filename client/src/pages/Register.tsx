// Register.tsx

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const RegisterPageContainer = styled.div`
  background: linear-gradient(to right, #fff, #fff);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegisterForm = styled.form`
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
  border: 1px solid #e4d813;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #f0c419;
  }
`;

const SubmitButton = styled.button`
  background-color: #e4d813;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 12px;
  width: 100%;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0c419;
  }
`;

const LoginLink = styled(Link)`
  display: block;
  color: #e4d813;
  margin-top: 10px;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #f0c419;
  }
`;

const RegisterPage = () => {
  return (
    <RegisterPageContainer>
      <RegisterForm>
        <h2>Create an Account</h2>
        <InputField type="text" placeholder="Username" />
        <InputField type="email" placeholder="email" />
        <InputField type="password" placeholder="Password" />
        <SubmitButton type="submit">Register</SubmitButton>
        <LoginLink to="/login">Already have an account? Log in here</LoginLink>
      </RegisterForm>
    </RegisterPageContainer>
  );
};

export default RegisterPage;
