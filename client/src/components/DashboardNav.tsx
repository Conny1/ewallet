import { styled } from "styled-components";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.div`
  img {
    width: 160px;
  }
`;

const Auth = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  margin-right: 4px;

  button {
    border-radius: 30px;
    background-color: #fff;
    height: 30px;
    width: 100px;
    border: none;
    outline: 1px solid #e4d813;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e4d813;
    }
  }

  button:last-child {
    background-color: #e5db12;
    color: #fff;

    &:hover {
      background-color: #fff;
      color: #e5db12;
    }
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: bolder;
  font-size: 18px;
  color: #000;
`;

const DashboardNav = () => {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>
      <NavLink to="/dashboard">Home</NavLink>
      <NavLink to="/sendandrequest">Send and Request</NavLink>
      <NavLink to="/crypto">Crypto wallet</NavLink>

      <Auth>
        <Link to="/admin">Admin</Link>
        <Link to="/profile">Profile</Link>
        <button>Logout</button>
      </Auth>
    </Container>
  );
};

export default DashboardNav;
