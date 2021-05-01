import styled from 'styled-components';

export default function Spacer() {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-size: 28px;
  font-weight: 600;
`;