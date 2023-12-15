import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  /* min-height: 200px; */
`;

const FooterText = styled.p`
  font-size: 1rem;
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        &copy; {new Date().getFullYear()} Domestic Wire Transfer eWallet | All
        rights reserved
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
