import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

type Props = {
  setwidthraw: React.Dispatch<React.SetStateAction<boolean>>;
};

const WithdrawModel = ({ setwidthraw }: Props) => {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [acNumber, setACNumber] = useState("");
  const [routingNumber, setRoutingNumber] = useState("");
  const [wechatTag, setWechatTag] = useState("");
  const [revolutTag, setRevolutTag] = useState("");
  const [wiseEmail, setWiseEmail] = useState("");
  const [paypalEmail, setPaypalEmail] = useState("");
  const [payoneerEmail, setPayoneerEmail] = useState("");
  const [advcashEmail, setAdvcashEmail] = useState("");
  const [wmzNumber, setWmzNumber] = useState("");

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleACNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setACNumber(e.target.value);
  };

  const handleRoutingNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRoutingNumber(e.target.value);
  };

  const handleWechatTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWechatTag(e.target.value);
  };

  const handleRevolutTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRevolutTag(e.target.value);
  };

  const handleWiseEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWiseEmail(e.target.value);
  };

  const handlePaypalEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaypalEmail(e.target.value);
  };

  const handlePayoneerEmailChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPayoneerEmail(e.target.value);
  };

  const handleAdvcashEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdvcashEmail(e.target.value);
  };

  const handleWmzNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWmzNumber(e.target.value);
  };

  const handlePaymentMethodChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Amount:", amount);
    console.log("Payment Method:", paymentMethod);
    console.log("AC Number:", acNumber);
    console.log("Routing Number:", routingNumber);
    console.log("Wechat Tag:", wechatTag);
    console.log("Revolut Tag:", revolutTag);
    console.log("Wise Email:", wiseEmail);
    console.log("Paypal Email:", paypalEmail);
    console.log("Payoneer Email:", payoneerEmail);
    console.log("Advcash Email:", advcashEmail);
    console.log("WMZ Number:", wmzNumber);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Select onChange={handlePaymentMethodChange}>
          <option value="">Select deposit account</option>
          <option value="BankTransfer">
            Bank Transfer - AC number and Routing number
          </option>
          <option value="WechatPay">
            Wechat Pay - Wechat tag/phone number
          </option>
          <option value="Revolut">Revolut - Tag</option>
          <option value="Wise">Wise - Email</option>
          <option value="Paypal">Paypal - Email</option>
          <option value="Payoneer">Payoneer - Email</option>
          <option value="Advcash">Advcash - Email</option>
          <option value="Webmoney">Webmoney - WMZ number</option>
          {/* Add other options as needed */}
        </Select>
        {paymentMethod === "BankTransfer" && (
          <>
            <Input
              type="text"
              placeholder="Enter AC number"
              value={acNumber}
              onChange={handleACNumberChange}
            />
            <Input
              type="text"
              placeholder="Enter Routing number"
              value={routingNumber}
              onChange={handleRoutingNumberChange}
            />
          </>
        )}
        {paymentMethod === "WechatPay" && (
          <Input
            type="text"
            placeholder="Enter Wechat tag/phone number"
            value={wechatTag}
            onChange={handleWechatTagChange}
          />
        )}
        {paymentMethod === "Revolut" && (
          <Input
            type="text"
            placeholder="Enter Revolut tag"
            value={revolutTag}
            onChange={handleRevolutTagChange}
          />
        )}
        {paymentMethod === "Wise" && (
          <Input
            type="email"
            placeholder="Enter Wise email"
            value={wiseEmail}
            onChange={handleWiseEmailChange}
          />
        )}
        {paymentMethod === "Paypal" && (
          <Input
            type="email"
            placeholder="Enter Paypal email"
            value={paypalEmail}
            onChange={handlePaypalEmailChange}
          />
        )}
        {paymentMethod === "Payoneer" && (
          <Input
            type="email"
            placeholder="Enter Payoneer email"
            value={payoneerEmail}
            onChange={handlePayoneerEmailChange}
          />
        )}
        {paymentMethod === "Advcash" && (
          <Input
            type="email"
            placeholder="Enter Advcash email"
            value={advcashEmail}
            onChange={handleAdvcashEmailChange}
          />
        )}
        {paymentMethod === "Webmoney" && (
          <Input
            type="text"
            placeholder="Enter WMZ number"
            value={wmzNumber}
            onChange={handleWmzNumberChange}
          />
        )}
        <Input
          type="number"
          placeholder="Enter the amount"
          value={amount}
          onChange={handleAmountChange}
        />
        <Button type="submit">Withdraw</Button>
        <br />
        <br />
        <Button type="button" onClick={() => setwidthraw(false)}>
          Cancel
        </Button>
      </form>
    </FormContainer>
  );
};

export default WithdrawModel;
