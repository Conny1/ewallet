import styled from "styled-components";
import { usePendingtransacrionQuery } from "../utils/ApiRequest";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8;
`;

const Table = styled.table`
  width: 80%;
  border-collapse: collapse;
  margin-top: 20px;
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

const Message = styled.p`
  color: #555;
`;

// const paymentsData = [
//   {
//     id: 1,
//     amount: "$50.00",
//     description: "Awaiting Approval",
//     progress: "40%",
//   },
//   {
//     id: 2,
//     amount: "$30.00",
//     description: "Awaiting Approval",
//     progress: "20%",
//   },

// ];

const PaymentPendingPage = () => {
  const localStoragedata = localStorage.getItem("user");
  let userdata;

  if (localStoragedata !== null) {
    userdata = JSON.parse(localStoragedata);
  }

  const { data } = usePendingtransacrionQuery(userdata?.id);
  // console.log(data);
  return (
    <Container>
      {data?.length === 0 ? (
        "No pending Transaction yet"
      ) : (
        <Table>
          <thead>
            <tr>
              <TableHeader>Amount</TableHeader>
              <TableHeader>Description</TableHeader>
              <TableHeader>Progress</TableHeader>
              <TableHeader>Action</TableHeader>
            </tr>
          </thead>
          <tbody>
            {data?.map((payment) => (
              <tr key={payment.id}>
                <TableCell>{payment.amount}</TableCell>
                <TableCell>Awaiting Approval</TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <Message>
                    Your payment is currently pending. Please wait for the
                    transaction to complete.
                  </Message>
                </TableCell>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default PaymentPendingPage;
