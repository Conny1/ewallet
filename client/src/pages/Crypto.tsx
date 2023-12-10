import styled from "styled-components";
import DashboardNav from "../components/DashboardNav";

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
`;

const CryptoTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const CryptoDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const CryptoAddress = styled.div`
  font-size: 1rem;
  color: #333;
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

      <CryptoPageContainer>
        <CryptoSection>
          <CryptoTitle>Bitcoin</CryptoTitle>
          <CryptoDetails>
            <CryptoAddress>
              Bitcoin Address: 1abcde2FGHijkLmnpqrsTUVwxYZ
            </CryptoAddress>
            <CopyButton>Copy Address</CopyButton>
          </CryptoDetails>
          <DepositInfo>
            0.00% | 0.00 USD | 2 Bitcoin network confirmations | 0.00 USD
            Deposit
          </DepositInfo>
        </CryptoSection>

        <CryptoSection>
          <CryptoTitle>Ethereum</CryptoTitle>
          <CryptoDetails>
            <CryptoAddress>Ethereum Address: 0xAbCdEf0123456789</CryptoAddress>
            <CopyButton>Copy Address</CopyButton>
          </CryptoDetails>
          <DepositInfo>
            0.00% | 0.00 USD | 18 Ethereum network confirmations | 0.00 USD
            Deposit
          </DepositInfo>
        </CryptoSection>

        {/* Add similar sections for other cryptocurrencies */}
      </CryptoPageContainer>
    </>
  );
};

export default CryptoPage;
