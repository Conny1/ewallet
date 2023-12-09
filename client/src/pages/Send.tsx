import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useAddtopendingMutation,
  useSendmoneyMutation,
} from "../utils/ApiRequest";
import { User } from "../utils/Types";

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

const Send = () => {
  const [amount, setamount] = useState("");
  const [email, setemail] = useState("");
  const localStoragedata = localStorage.getItem("user");
  let userdata: User;

  if (localStoragedata !== null) {
    userdata = JSON.parse(localStoragedata);
  }

  const [sendamoney, { isSuccess: sendsucces }] = useSendmoneyMutation();
  const [addtopending, { isSuccess: addsucces }] = useAddtopendingMutation();

  useEffect(() => {
    if (addsucces && sendsucces) {
      toast("Transaction succesful");
    }
  }, [addsucces, sendsucces]);

  const send = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !amount) {
      return toast("Enter all provided fields");
    }
    try {
      await sendamoney({
        userid: userdata?.id,
        balance: Number(amount),
      });

      await addtopending({
        userid: userdata?.id,
        amount: Number(amount),
        pending: true,
        fromid: userdata.email,
        toid: email,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <ToastContainer />
      <Title>Send Money</Title>
      <Form onSubmit={send}>
        <AmountInput
          type="number"
          onChange={(e) => setamount(e.target.value)}
          placeholder="Enter Amount"
        />
        <Input
          type="text"
          onChange={(e) => setemail(e.target.value)}
          placeholder="Recipient's Email or Phone"
        />

        <SubmitButton>Send Money</SubmitButton>
      </Form>
    </Container>
  );
};

export default Send;
