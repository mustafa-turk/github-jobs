import styled from 'styled-components';

export default function Pill({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.span`
  color: ${(p) => p.theme.colors.violet.dark};
  border: 1px solid ${(p) => p.theme.colors.violet.dark};
  background: ${(p) => p.theme.colors.violet.light};
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 12px;
  margin-bottom: 8px;
  display: inline-flex;
  align-items: center;
  svg {
    margin-right: 3px;
  }
`;
