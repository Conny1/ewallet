import { Link } from "react-router-dom";
import styled from "styled-components";
import DashboardNav from "../components/DashboardNav";
import { Outlet } from "react-router-dom";
import { mobile } from "../utils/Responsive";
import Footer from "../components/Footer";

const MainContainr = styled.div``;
const Navcontainer = styled.div``;

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

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  ${mobile({ flexWrap: "wrap" })}
`;

const ActionButton = styled.button`
  width: 150px;
  height: 40px;
  background-color: #e5db12;
  border: 1px;
  border-radius: 6px;
  color: #333;
  cursor: pointer;
`;

const SendAndRequestPage = () => {
  return (
    <>
      <MainContainr>
        <Navcontainer>
          <DashboardNav />
        </Navcontainer>
        <Container>
          <Title>Send and Request Money</Title>
          <ButtonContainer>
            <ActionButton>
              <Link to="/sendandrequest/send">Send Money</Link>
            </ActionButton>
            <ActionButton>
              <Link to="/sendandrequest/request">Request Money</Link>
            </ActionButton>
            <ActionButton>
              <Link to="/sendandrequest/pending">Pending</Link>
            </ActionButton>
          </ButtonContainer>
          {/* Additional components and sections can be added here */}
        </Container>
        <Outlet />
      </MainContainr>
      <Footer />
    </>
  );
};

export default SendAndRequestPage;
