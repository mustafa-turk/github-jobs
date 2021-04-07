import styled from 'styled-components';
import Head from 'next/head';

export default function PageLayout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title || 'GitHub Jobs'}</title>
      </Head>
      <Content>{children}</Content>
    </div>
  );
}

const Content = styled.div`
  max-width: 960px;
  margin: 0 auto;
  @media (max-width: ${(p) => p.theme.breakpoints.lg}) {
    margin: 0 20px;
  }
`;
