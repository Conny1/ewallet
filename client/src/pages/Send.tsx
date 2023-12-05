import React from "react";
import styled from "styled-components";

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

const NoteInput = styled(Input)`
  height: 60px;
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
  return (
    <Container>
      <Title>Send Money</Title>
      <Form>
        <AmountInput type="text" placeholder="Enter Amount" />
        <Input type="text" placeholder="Recipient's Email or Phone" />
        <NoteInput type="text" placeholder="Add a note (optional)" />
        <SubmitButton>Send Money</SubmitButton>
      </Form>
    </Container>
  );
};

export default Send;
