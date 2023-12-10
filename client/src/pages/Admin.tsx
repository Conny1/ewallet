import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DashboardNav from "../components/DashboardNav";
import {
  useGetPendingQuery,
  useReceivemoneyMutation,
} from "../utils/ApiRequest";
import { toast, ToastContainer } from "react-toastify";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8;
`;

const PaymentTable = styled.table`
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

const Button = styled.button`
  padding: 8px 16px;
  margin-top: 10px;
  cursor: pointer;
  background-color: #e5db12;
  color: #333;
  border: none;
  border-radius: 4px;
`;

const EmailForm = styled.form`
  width: 80%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const EmailInput = styled.input`
  padding: 8px;
  margin-bottom: 10px;
`;

const SendEmailButton = styled.button`
  padding: 8px 16px;
  cursor: pointer;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
`;

const AdminPanel = () => {
  const [email, setEmail] = useState("");
  const localStoragedata = localStorage.getItem("user");
  let userdata;

  if (localStoragedata !== null) {
    userdata = JSON.parse(localStoragedata);
  }

  // rtq getpending request

  const { data } = useGetPendingQuery(userdata?.id);

  // approve transactions
  const [receivemoney, { isSuccess: receiveSucess }] =
    useReceivemoneyMutation();

  useEffect(() => {
    if (receiveSucess) {
      toast("transaction complete");
    }
  }, [receiveSucess]);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSendEmail = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    // Logic to send email to the new user
    alert(`Email sent to ${email}`);
  };

  const handleApprovePayment = (
    amount: number | undefined,
    toid: string | undefined,
    id: number | undefined
  ) => {
    // Logic to approve payment
    if (toid && amount) {
      receivemoney({ balance: amount, useremail: toid, pendingid: id });
    }
  };

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
  //   // Add more payment items as needed
  // ];

  return (
    <>
      <DashboardNav />
      <ToastContainer />
      <Container>
        {data?.length === 0 ? (
          <p>No pending transactions yet</p>
        ) : (
          <PaymentTable>
            <thead>
              <tr>
                <TableHeader>Payment ID</TableHeader>
                <TableHeader>Amount</TableHeader>
                <TableHeader>Description</TableHeader>
                <TableHeader>Progress</TableHeader>
                <TableHeader>Action</TableHeader>
              </tr>
            </thead>
            <tbody>
              {data?.map((payment) => (
                <tr key={payment.id}>
                  <TableCell>{payment.id}</TableCell>
                  <TableCell>{payment.amount}</TableCell>
                  <TableCell>Awaiting Approval</TableCell>
                  <TableCell>50%</TableCell>
                  <TableCell>
                    <Button
                      onClick={() =>
                        handleApprovePayment(
                          payment?.amount,
                          payment?.toid,
                          payment?.id
                        )
                      }
                    >
                      Approve
                    </Button>
                  </TableCell>
                </tr>
              ))}
            </tbody>
          </PaymentTable>
        )}

        <EmailForm>
          <label htmlFor="email">Send Email to New User:</label>
          <EmailInput
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter email address"
          />
          <SendEmailButton onClick={handleSendEmail}>
            Send Email
          </SendEmailButton>
        </EmailForm>
      </Container>
    </>
  );
};

export default AdminPanel;
