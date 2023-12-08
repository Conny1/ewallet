import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useLoginMutation } from "../utils/ApiRequest";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  // redux toolkit endpoint
  const [login, { isLoading, isSuccess, isError, error, data }] =
    useLoginMutation();

  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!password || !email) {
      return toast("Enter all visible fields");
    }
    const body = {
      email,
      password,
    };
    try {
      await login(body);
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
      toast("Login Succesful");
      setTimeout(() => {
        navigate("/dashboard");
        localStorage.setItem("user", JSON.stringify(data));
      }, 3000);
    }

    if (isError) {
      if (error) {
        if ("status" in error) {
          if (error.status === 401) {
            toast("Invalid email or password");
          }
          if (error.status === 404) {
            toast("An account with that email does not exist");
          }
        }
      }
      toast("Error. Try Again...");
    }
  }, [isLoading, isError, isSuccess, error, navigate, data]);

  return (
    <LoginPageContainer>
      <ToastContainer />
      <LoginForm onSubmit={loginHandler}>
        <h2>Login</h2>
        <InputField
          type="email"
          onChange={(e) => setemail(e.target.value)}
          placeholder="Email"
        />
        <InputField
          type="password"
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Password"
        />
        <SubmitButton type="submit">Log In</SubmitButton>
        <RegisterLink to="/register">
          Don't have an account? Register here
        </RegisterLink>
      </LoginForm>
    </LoginPageContainer>
  );
};

export default LoginPage;
