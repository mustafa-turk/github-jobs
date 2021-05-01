import styled from 'styled-components';

export default function Warning() {
  return (
    <Wrapper>
      <Card>
        <Title>The Github Jobs API is dead</Title>
        <Body>
          <p>This web application was making use of the Github Jobs API. Sadly, this API is no longer supported and maintained by Github. This means that this project is also dead.</p>
          <p>You can still check out the <a href="https://github.com/mustafa-turk/devjobs.app">source code</a> of this project though.</p>
        </Body>
      </Card>
    </Wrapper>
  )
}

const Wrapper = styled.span`
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(5px);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  padding: 30px;
  box-shadow:
  0 0 2.2px rgba(0, 0, 0, 0.034),
  0 0px 5.3px rgba(0, 0, 0, 0.048),
  0 0px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  display: inline-block;
  max-width: 450px;
  text-align: center;
  margin: 10px;
  background: white;
`

const Title = styled.p`
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 18px;
`

const Body = styled.p`
  p {
    margin-bottom: 10px;
  }
  a {
    color: ${(p) => p.theme.colors.blue.dark};
  }
`