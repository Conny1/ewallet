import styled from "styled-components";
import Nav from "../components/Nav";
import head from "../images/head.jpg";
import currencies from "../images/currencies.svg";
import p2p from "../images/p2p.svg";
import rates from "../images/rates.svg";
import merchant from "../images/merchant.svg";
import cards from "../images/cards.svg";
import support from "../images/support.svg";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { mobile } from "../utils/Responsive";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Container = styled.div`
  width: 100%;
  /* outline: 1px solid red; */
`;
const Navbar = styled.div``;
const Header = styled.div`
  /* outline: 1px solid red; */
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${head});
  h1 {
    width: 40%;
    text-align: center;
    color: #fff;
    ${mobile({ width: "100%", fontSize: "20px" })};
  }
  button {
    border-radius: 30px;
    background-color: #e5db12;
    height: 60px;
    width: 170px;
    border: none;
    font-size: 18px;
    cursor: pointer;
  }
`;

const Body = styled.div``;
const Row1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  h2 {
    width: 70%;
    font-size: 40px;
    text-align: center;
    ${mobile({ width: "100%", fontSize: "20px" })};
  }
  p {
    width: 60%;
    text-align: center;
  }
`;
const Row1Item = styled.div`
  /* outline: 1px solid red; */
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  ${mobile({ justifyContent: "center", marginBottom: "10px" })};
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  ${mobile({ width: "90%", outline: "1px solid gainsboro" })};

  img {
    width: 100px;
  }
  p {
    width: 80%;
  }
`;

const Home = () => {
  return (
    <Container>
      <Navbar>
        <Nav />
      </Navbar>
      <Header>
        <h1>The simpler, safer way to transfer money .</h1>
        <Link to="/login">
          <button>Sign up for free</button>
        </Link>
      </Header>
      <Body>
        <Row1>
          <h2>
            Local and international payment tools, bank transfers, cards,
            digital currencies and more.
          </h2>
          <p>
            Join the millions of worldwide customers managing their online
            finances with Domestic wire transfer since 2017.
          </p>

          <Row1Item>
            <Item>
              <img src={currencies} alt="" />
              <p>Use 9 currencies in a single account</p>
            </Item>

            <Item>
              <img src={merchant} alt="" />
              <p>Deposit and withdraw on merchant websites</p>
            </Item>

            <Item>
              <img src={p2p} alt="" />
              <p>Send, receive free instant p2p transfers</p>
            </Item>

            <Item>
              <img src={cards} alt="" />
              <p>Get an ADV card to spend anywhere</p>
            </Item>

            <Item>
              <img src={support} alt="" />
              <p>24/7 live agent chat and ticket support</p>
            </Item>

            <Item>
              <img src={rates} alt="" />
              <p>Buy and sell digital currencies</p>
            </Item>
          </Row1Item>
        </Row1>
        <Testimonials />
        <Footer />
      </Body>
      <FloatingWhatsApp phoneNumber="+254742429535" accountName="Admin" />
    </Container>
  );
};

export default Home;
