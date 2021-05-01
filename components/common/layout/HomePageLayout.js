import styled from 'styled-components';
import PageLayout from 'components/common/layout/PageLayout';

export default function HomePageLayout({ children }) {
  return (
    <PageLayout>
      <Header>
        <Logo>DEVJOBS</Logo>
        <Title>Jobs for developers</Title>
      </Header>
      {children}
    </PageLayout>
  );
}

const Header = styled.div`
  text-align: center;
  margin: 50px 0 20px;
`;

const Logo = styled.p`
  font-size: 12px;
  color: ${(p) => p.theme.colors.blue.dark};
  letter-spacing: 2px;
  margin-top: 15px;
`;

const Title = styled.h1`
  margin-top: 5px;
  font-size: 30px;
  font-weight: 900;
`;
