import styled from "styled-components";
import DashboardNav from "../components/DashboardNav";

const MainContainr = styled.div``;
const Navcontainer = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8; /* Set a light background color */
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
  color: #e5db12; /* Use the theme color for the title */
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }

  button {
    height: 40px;
    background-color: #e5db12;
    border: 1px;
    border-radius: 6px;
    color: #333;
    cursor: pointer;
  }
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 10px;
  background-color: #f5f5f5;
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: left;
`;

const cryptoData = [
  {
    name: "Bitcoin",
    feePercent: "0.00%",
    fee: "0.00 USD",
    completion: "2 Bitcoin network confirmations",
    spend: "0.00 USD",
  },
  {
    name: "Ethereum",
    feePercent: "0.00%",
    fee: "0.00 USD",
    completion: "18 Ethereum network confirmations",
    spend: "0.00 USD",
  },
  {
    name: "Litecoin",
    feePercent: "0.00%",
    fee: "0.00 USD",
    completion: "4 Litecoin network confirmations",
    spend: "0.00 USD",
  },
  {
    name: "Bitcoin Cash",
    feePercent: "0.00%",
    fee: "0.00 USD",
    completion: "6 Bitcoin Cash network confirmations",
    spend: "0.00 USD",
  },
  {
    name: "Ripple",
    feePercent: "0.00%",
    fee: "0.00 USD",
    completion: "Instant",
    spend: "0.00 USD",
  },
  {
    name: "TRON",
    feePercent: "0.00%",
    fee: "0.00 USD",
    completion: "1 TRON network confirmation",
    spend: "0.00 USD",
  },
];

const Crypto = () => {
  return (
    <MainContainr>
      <Navcontainer>
        <DashboardNav />
      </Navcontainer>

      <Container>
        <Title>Crypto Fees</Title>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>Crypto</TableHeader>
              <TableHeader>Fee %</TableHeader>
              <TableHeader>Fee</TableHeader>
              <TableHeader>Completion</TableHeader>
              <TableHeader>You Spend</TableHeader>
              <TableHeader>Address</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {cryptoData.map((crypto, index) => (
              <TableRow key={index}>
                <TableCell>{crypto.name}</TableCell>
                <TableCell>{crypto.feePercent}</TableCell>
                <TableCell>{crypto.fee}</TableCell>
                <TableCell>{crypto.completion}</TableCell>
                <TableCell>{crypto.spend}</TableCell>
                <button>Copy</button>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </Container>
    </MainContainr>
  );
};

export default Crypto;
