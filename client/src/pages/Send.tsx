import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useAddtopendingMutation,
  useGetBalaceQuery,
  useSendmoneyMutation,
} from "../utils/ApiRequest";
import { User } from "../utils/Types";
import { mobile } from "../utils/Responsive";

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
  ${mobile({ width: "80%" })}
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
  let userdata: User | undefined;

  if (localStoragedata !== null) {
    userdata = JSON.parse(localStoragedata);
  } else {
    console.log("else");
  }
  const { data } = useGetBalaceQuery(userdata?.id);
  const [sendamoney, { isSuccess: sendsucces, isError, error: senderror }] =
    useSendmoneyMutation();
  const [addtopending, { isSuccess: addsucces }] = useAddtopendingMutation();

  useEffect(() => {
    if (addsucces && sendsucces) {
      toast("Transaction succesful");
      setamount("");
      setemail("");
    }

    if (isError) {
      if (senderror) {
        if ("status" in senderror) {
          if (senderror.status === 404) {
            toast(
              `That is not a valid account. Send a request for the user to create an account`
            );
          }
        }
      }
    }
  }, [addsucces, sendsucces, senderror, isError]);

  const send = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data) {
      // console.log(data);
      // Ensure 'balance' property exists and is a number
      if ("balance" in data && typeof data.balance === "string") {
        const amountToCheck = Number(amount);

        if (Number(data.balance) <= 0 || Number(data.balance) < amountToCheck) {
          return toast(
            "You have insufficient funds to complete the transaction"
          );
        }
      }
    }

    if (!email || !amount) {
      return toast("Enter all provided fields");
    }
    try {
      await sendamoney({
        userid: userdata?.id,
        balance: Number(amount),
        useremail: userdata?.email,
        toid: email,
      });

      await addtopending({
        userid: userdata?.id,
        amount: Number(amount),
        pending: true,
        fromid: userdata?.email,
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
