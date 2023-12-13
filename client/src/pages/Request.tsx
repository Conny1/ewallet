import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRequestmoneyMutation } from "../utils/ApiRequest";
import { User } from "../utils/Types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
`;

const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
`;

const AmountInput = styled(Input)`
  font-size: 18px;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: #e5db12;
  border: 1px;
  border-radius: 6px;
  color: #333;
  cursor: pointer;
`;

const Request = () => {
  const [receiveremail, setreceiveremail] = useState("");
  const [amount, setamount] = useState("");
  const [requestmoney, { isSuccess }] = useRequestmoneyMutation();
  const localdata = localStorage.getItem("user");
  let userData: User;

  if (localdata !== null) {
    userData = JSON.parse(localdata);
  } else {
    // Handle the case where localdata is null
    console.error("localdata is null");
  }

  useEffect(() => {
    if (isSuccess) {
      toast("Request sent");
      setamount("");
      setreceiveremail("");
    }
  }, [isSuccess]);

  const requestbt = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await requestmoney({
        id: userData.id,
        email: userData?.email,
        amount,
        receiveremail,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <ToastContainer />
      <Title>Request Money</Title>
      <Form onSubmit={requestbt}>
        <AmountInput
          type="text"
          onChange={(e) => setamount(e.target.value)}
          placeholder="Enter Amount"
        />
        <Input
          type="text"
          onChange={(e) => setreceiveremail(e.target.value)}
          placeholder="Payer's Email "
        />

        <SubmitButton>Request Money</SubmitButton>
      </Form>
    </Container>
  );
};

export default Request;
