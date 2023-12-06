import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8;
`;

const DepositForm = styled.form`
  width: 50%;
  text-align: center;
  margin-top: 20px;
`;

const CryptoInput = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
`;

const DepositButton = styled.button`
  padding: 12px 24px;
  cursor: pointer;
  background-color: #e5db12;
  color: #333;
  border: none;
  border-radius: 6px;
`;

const CryptoForm = () => {
  return (
    <Container>
      <h2>Deposit Cryptocurrency</h2>
      <DepositForm>
        <label htmlFor="cryptoAmount">Enter Amount:</label>
        <CryptoInput
          type="text"
          id="cryptoAmount"
          placeholder="Enter the amount of cryptocurrency"
        />
        <DepositButton>Deposit</DepositButton>
      </DepositForm>
    </Container>
  );
};

export default CryptoForm;
