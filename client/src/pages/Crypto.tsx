import styled from "styled-components";
import DashboardNav from "../components/DashboardNav";
import copy from "copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import Footer from "../components/Footer";

const CryptoPageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const CryptoSection = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 20px;
  /* outline: 1px solid red; */
`;

const CryptoTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const CryptoDetails = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 10px;
`;

const CryptoAddress = styled.p`
  font-size: 1rem;
  color: #333;
  /* outline: 1px solid red; */
`;

const CopyButton = styled.button`
  background-color: #e5db12;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const DepositInfo = styled.div`
  font-size: 1rem;
  color: #555;
`;

const CryptoPage = () => {
  return (
    <>
      <DashboardNav />
      <ToastContainer />
      <h3> Send to the provided address to deposit </h3>

      <CryptoPageContainer>
        <CryptoSection>
          <CryptoTitle>Bitcoin</CryptoTitle>
          <CryptoDetails>
            <CryptoAddress>Bitcoin Address: bc1q23h2...</CryptoAddress>
            <CopyButton
              onClick={() => {
                copy("bc1q23h2gvyaz65r9h6l9e9emqv4fau0ks2kvm2aw9");
                toast("copied");
              }}
            >
              Copy Address
            </CopyButton>
          </CryptoDetails>
          <DepositInfo>
            0.00% | 0.00 USD | 2 Bitcoin network confirmations | 0.00 USD
            Deposit
          </DepositInfo>
        </CryptoSection>

        <CryptoSection>
          <CryptoTitle>Ethereum</CryptoTitle>
          <CryptoDetails>
            <CryptoAddress>Ethereum Address: 0x2BadD134b....</CryptoAddress>
            <CopyButton
              onClick={() => {
                copy("0x2BadD134beC282Cd40f40FfaF189297b5F3a4547");

                toast("copied");
              }}
            >
              Copy Address
            </CopyButton>
          </CryptoDetails>
          <DepositInfo>
            0.00% | 0.00 USD | 18 Ethereum network confirmations | 0.00 USD
            Deposit
          </DepositInfo>
        </CryptoSection>

        <CryptoSection>
          <CryptoTitle>Usdt</CryptoTitle>
          <CryptoDetails>
            <CryptoAddress>Usdt Address: 0x2BadD134beC28....</CryptoAddress>
            <CopyButton
              onClick={() => {
                copy("0x2BadD134beC282Cd40f40FfaF189297b5F3a4547");
                toast("copied");
              }}
            >
              Copy Address
            </CopyButton>
          </CryptoDetails>
          <DepositInfo>
            0.00% | 0.00 USD | 2 Usdt network confirmations | 0.00 USD Deposit
          </DepositInfo>
        </CryptoSection>

        {/* Add similar sections for other cryptocurrencies */}
      </CryptoPageContainer>
      <Footer />
    </>
  );
};

export default CryptoPage;
