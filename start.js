import styled from 'styled-components';

const StartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Start = () => (
  <StartContainer>
    <h1>Get Started</h1>
    <p>This is the start page.</p>
  </StartContainer>
);

export default Start;
