import { useState } from 'react';
import styled from 'styled-components';

const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Input = styled.input`
  margin: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
`;

const Result = styled.div`
  margin-top: 1rem;
  font-size: 1.2rem;
`;

const MortgageCalculator = () => {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [years, setYears] = useState(0);
  const [result, setResult] = useState(null);

  const calculateMortgage = () => {
    const monthlyRate = rate / 100 / 12;
    const payments = years * 12;
    const x = Math.pow(1 + monthlyRate, payments);
    const monthlyPayment = (principal * x * monthlyRate) / (x - 1);
    setResult(monthlyPayment.toFixed(2));
  };

  return (
    <CalculatorContainer>
      <h2>Mortgage Calculator</h2>
      <Input
        type="number"
        placeholder="Principal"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Annual Interest Rate"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Years"
        value={years}
        onChange={(e) => setYears(e.target.value)}
      />
      <button onClick={calculateMortgage}>Calculate</button>
      {result && (
        <Result>
          Monthly Payment: ${result}
        </Result>
      )}
    </CalculatorContainer>
  );
};

export default MortgageCalculator;
