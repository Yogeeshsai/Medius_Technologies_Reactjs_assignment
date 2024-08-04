import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Home = () => (
  <HomeContainer>
    <h1>Welcome to Better.com Replica</h1>
    <p>This is the home page.</p>
  </HomeContainer>
);

export default Home;
