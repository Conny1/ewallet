import { styled } from "styled-components";
import logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { mobile } from "../utils/Responsive";
import { useState } from "react";

const Container = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  ${mobile({ display: "none" })}
`;

const Container2 = styled.div`
  padding: 15px;
  display: none;

  /* flex-direction: row; */
  /* outline: 1px solid red; */

  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  button {
    background-color: #e5db12;
    color: #fff;
    border: none;
    border-radius: 30px;
    width: 70px;
    height: 30px;
  }

  ${mobile({
    display: "flex",
    alignItems: " center",
    justifyContent: "space-between",
    position: "relative",
  })}
`;

const ResponsiveMenu = styled.div`
  padding: 15px;
  display: none;
  height: fit-content;
  position: absolute;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  right: 0;
  top: 100%;
  background-color: #e5db12;
  height: 300px;
  ${mobile({
    display: "flex",

    justifyContent: "space-between",
    flexDirection: "column",
  })}
`;

const Logo = styled.div`
  img {
    width: 260px;
  }
  ${mobile({ width: "fit-content" })}
`;

const Auth = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  margin-right: 4px;
  ${mobile({ width: "100%", alignItems: "center" })}

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
    ${mobile({ backgroundColor: "#000" })}

    &:hover {
      background-color: #fff;
      color: #e5db12;
    }
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: bolder;
  font-size: 15px;
  color: #000;
`;

const DashboardNav = () => {
  const [modal, setmodal] = useState(false);
  const navigate = useNavigate();
  const localstorageData = localStorage.getItem("user");
  let userData;
  if (localstorageData) {
    userData = JSON.parse(localstorageData);
  }

  return (
    <>
      <Container2>
        <Link to="/">
          <Logo>
            <img src={logo} alt="Logo" />
          </Logo>
        </Link>

        <button onClick={() => setmodal((prev: boolean) => !prev)}>Menu</button>
        {modal && (
          <ResponsiveMenu>
            <NavLink to="/dashboard">Home</NavLink>
            <NavLink to="/sendandrequest">Send and Request</NavLink>
            <NavLink to="/crypto">Crypto wallet</NavLink>

            <Auth>
              {userData?.isadmin === "true" ? (
                <NavLink to="/admin">Admin</NavLink>
              ) : null}
              <NavLink to="/profile">Profile</NavLink>
              <button
                onClick={() => {
                  localStorage.clear();
                  navigate("/login");
                }}
              >
                Logout
              </button>
            </Auth>
          </ResponsiveMenu>
        )}
      </Container2>
      <Container>
        <Link to="/">
          <Logo>
            <img src={logo} alt="Logo" />
          </Logo>
        </Link>
        <NavLink to="/dashboard">Home</NavLink>
        <NavLink to="/sendandrequest">Send and Request</NavLink>
        <NavLink to="/crypto">Crypto wallet</NavLink>

        <Auth>
          {userData?.isadmin === "true" ? (
            <NavLink to="/admin">Admin</NavLink>
          ) : null}
          <NavLink to="/profile">Profile</NavLink>
          <button
            onClick={() => {
              localStorage.clear();
              navigate("/login");
            }}
          >
            Logout
          </button>
        </Auth>
      </Container>
    </>
  );
};

export default DashboardNav;
