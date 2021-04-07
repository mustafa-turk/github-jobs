import styled from 'styled-components';
import { useRouter } from 'next/router';
import { ClockIcon, HomeIcon, StarOutlineIcon } from 'components/shared/icons';

export default function Navbar() {
  return (
    <Wrapper>
      <NavbarItem slug="/">
        <HomeIcon size="21px" />
      </NavbarItem>
      <NavbarItem slug="/favourites">
        <StarOutlineIcon size="21px" />
      </NavbarItem>
      <NavbarItem slug="/history">
        <ClockIcon size="21px" />
      </NavbarItem>
    </Wrapper>
  );
}

function NavbarItem({ slug, children }) {
  const router = useRouter();
  return (
    <ItemWrapper isActive={router.pathname === slug}>
      <button onClick={() => router.push(slug)}>{children}</button>
    </ItemWrapper>
  );
}

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(p) => p.theme.colors.gray.medium};
  padding: 15px 0;
  margin-bottom: 20px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;

const ItemWrapper = styled.div`
  flex: 1;
  text-align: center;

  svg {
    color: ${(p) => (p.isActive ? p.theme.colors.blue.dark : p.theme.colors.gray.dark)};
  }
`;
