import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 1rem;
  text-align: center;
  background: #f8f8f8;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const Footer = () => (
  <FooterContainer>
    <p>© 2024 Better.com Replica</p>
  </FooterContainer>
);

export default Footer;
