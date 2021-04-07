import styled from 'styled-components';
import { useRouter } from 'next/router';
import { ArrowLeftIcon } from 'components/shared/icons';

export default function Navbar() {
  const router = useRouter();

  return (
    <Wrapper>
      <BackButton onClick={() => router.back()}>
        <ArrowLeft size="21px" />
      </BackButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: white;
  border-bottom: 1px solid ${(p) => p.theme.colors.gray.medium};
  padding: 15px 0;
  margin-bottom: 20px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;

const BackButton = styled.button`
  padding: 0;
  margin: 0;
`;

const ArrowLeft = styled(ArrowLeftIcon)`
  color: ${(p) => p.theme.colors.gray.dark};
`;
