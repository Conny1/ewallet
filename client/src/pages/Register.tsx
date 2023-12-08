import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useRegisterMutation } from "../utils/ApiRequest";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [number, setnumber] = useState("");
  const navigate = useNavigate();

  // redux toolkit endpoint
  const [register, { isLoading, isSuccess, isError }] = useRegisterMutation();

  const Register = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !password || !email || !number) {
      return toast("Enter all visible fields");
    }
    const body = {
      name,
      email,
      password,
      number,
    };
    try {
      await register(body);
    } catch (error) {
      console.log(error);
    }
  };

  // confirm registration and handle errors
  useEffect(() => {
    if (isLoading) {
      toast("Loading...");
    }

    if (isSuccess) {
      toast("Account created. Redirecting to login...");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }

    if (isError) {
      toast("Error. Try Again...");
    }
  }, [isLoading, isError, isSuccess, navigate]);

  return (
    <RegisterPageContainer>
      <ToastContainer />
      <RegisterForm onSubmit={Register}>
        <h2>Create an Account</h2>
        <InputField
          type="text"
          onChange={(e) => setname(e.target.value)}
          placeholder="Username"
        />
        <InputField
          type="email"
          onChange={(e) => setemail(e.target.value)}
          placeholder="email"
        />
        <InputField
          type="tel"
          onChange={(e) => setnumber(e.target.value)}
          placeholder="Phone Number"
        />
        <InputField
          type="password"
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Password"
        />

        <SubmitButton type="submit">Register</SubmitButton>
        <LoginLink to="/login">Already have an account? Log in here</LoginLink>
      </RegisterForm>
    </RegisterPageContainer>
  );
};

export default RegisterPage;
