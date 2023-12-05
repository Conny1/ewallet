import styled from "styled-components";
import DashboardNav from "../components/DashboardNav";

const Container = styled.div`
  min-height: 100vh;
`;

const Navbar = styled.div`
  /* Add your styling for the navbar here */
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
`;

const Row1 = styled.div`
  flex: 1;
  background-color: #e5db12;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BalanceContainer = styled.div`
  width: 70%;
  background-color: #fff;
  margin-top: 20px;
  height: 200px;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-weight: bolder;
    margin: 0;
    font-size: 40px;
    width: fit-content;
  }

  h2 {
    margin: 0;
  }

  button {
    width: 150px;
    height: 30px;
    background-color: #e5db12;
    border: 1px;
    border-radius: 6px;
  }
`;
const ActivityContainer = styled.div`
  width: 70%;
  background-color: #fff;
  margin-top: 20px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  h2 {
    color: #333;
    margin-bottom: 10px;
  }

  p {
    color: #555;
    margin-bottom: 20px;
  }

  button {
    width: 120px;
    height: 30px;
    background-color: #e5db12;
    border: 1px;
    border-radius: 6px;
    color: #333;
    cursor: pointer;
  }
`;

const Row2 = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;

  button {
    margin-bottom: 10px;
    width: 80%;
    height: 40px;
    background-color: #e5db12;
    border: 1px;
    border-radius: 6px;
    color: #333;
    cursor: pointer;
  }
`;

const Dashboard = () => {
  return (
    <Container>
      <Navbar>
        <DashboardNav />
      </Navbar>
      <Body>
        <Row1>
          <BalanceContainer>
            <h2>Balance</h2>
            <p>$0.00</p>
            <button>Transfer funds</button>
          </BalanceContainer>
          <ActivityContainer>
            <h2>Recent Activity</h2>
            <p>
              See when money comes in, and when it goes out. You’ll find your
              recent activity here.
            </p>
            <button>Show All</button>
          </ActivityContainer>
        </Row1>
        <Row2>
          <div>
            <button>Send</button>
            <button>Request</button>
            <button>Add bank or card</button>
          </div>
        </Row2>
      </Body>
    </Container>
  );
};

export default Dashboard;
