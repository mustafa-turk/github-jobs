import styled from 'styled-components';
import { times } from 'lodash';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
import { BurstIcon, StarFillIcon } from 'components/shared/icons';
import Pill from 'components/shared/Pill';

export function List({ children, isLoading, isEmpty }) {
  if (isLoading) {
    return times(5, (i) => <ListItemLoading key={i} />);
  }
  if (isEmpty) {
    return 'nothing found :(';
  }
  return <div>{children}</div>;
}

export function ListItem({ details, isFaved, onFavClick }) {
  return (
    <ItemWrapper>
      <ItemContent>
        <Link href={`/${details.id}`}>
          <a>
            <ItemContentHeader>
              {details.isNew && (
                <Pill>
                  <BurstIcon size="14px" /> New
                </Pill>
              )}
              <ItemContentTitle data-cy="list-item-title">{details?.title}</ItemContentTitle>
            </ItemContentHeader>
            <ItemContentSubtitle data-cy="list-item-details">
              {details?.company} - {details?.location}
            </ItemContentSubtitle>
          </a>
        </Link>
      </ItemContent>
      <FavoriteButton aria-label="Add to favourites" onClick={onFavClick}>
        <FavoriteIcon size="21px" isFaved={isFaved} />
      </FavoriteButton>
    </ItemWrapper>
  );
}

export function ListItemLoading() {
  return (
    <ItemWrapperLoading>
      <ItemContentTitleLoading>
        <Skeleton />
      </ItemContentTitleLoading>
      <ItemContentSubtitleLoading>
        <Skeleton />
      </ItemContentSubtitleLoading>
    </ItemWrapperLoading>
  );
}

const ItemWrapper = styled.div`
  border-bottom: 1px solid ${(p) => p.theme.colors.gray.medium};
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ItemContent = styled.div`
  margin: 10px 0;
  flex: 1;
`;

const ItemContentHeader = styled.div`
  margin-bottom: 5px;
`;

const ItemContentTitle = styled.p`
  font-weight: 500;
  font-size: 21px;
  transition: color 0.2s ease;
  @media (max-width: ${(p) => p.theme.breakpoints.md}) {
    font-size: 18px;
  }
  &:hover {
    color: ${(p) => p.theme.colors.blue.dark};
  }
`;

const ItemContentSubtitle = styled.p`
  max-width: 400px;
  @media (max-width: ${(p) => p.theme.breakpoints.md}) {
    font-size: 16px;
  }
  color: ${(p) => p.theme.colors.gray.dark};
`;

const FavoriteButton = styled.button`
  padding: 0;
`;

const FavoriteIcon = styled(StarFillIcon)`
  transition: fill 0.2s ease;
  fill: ${(p) => (p.isFaved ? p.theme.colors.yellow.dark : p.theme.colors.gray.medium)};
`;

const ItemWrapperLoading = styled(ItemWrapper)`
  display: block;
`;

const ItemContentTitleLoading = styled(ItemContentTitle)`
  max-width: 520px;
`;

const ItemContentSubtitleLoading = styled(ItemContentSubtitle)`
  max-width: 320px;
`;
