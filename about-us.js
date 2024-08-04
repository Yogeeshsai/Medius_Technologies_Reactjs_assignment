import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const AboutUs = () => (
  <AboutContainer>
    <h1>About Us</h1>
    <p>This is the about us page.</p>
  </AboutContainer>
);

export default AboutUs;
