import styled from 'styled-components';

export default function Title({ children }) {
  return (
    <H1>
      {children}
    </H1>
  )
}

const H1 = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin-top: 30px;
`;