import styled from 'styled-components';
import { formatDistance } from 'date-fns';
import Link from 'next/link';

export default function HistoryList({ history, onClear }) {
  return (
    <div>
      {history.map(({ id, title, date }) => (
        <Link href={`/${id}`} key={id}>
          <a>
            <HistoryListItem>
              <HistoryListItemDate>
                Visited {formatDistance(new Date(date), new Date(), { addSuffix: true })}
              </HistoryListItemDate>
              <HistoryListItemTitle>{title}</HistoryListItemTitle>
            </HistoryListItem>
          </a>
        </Link>
      ))}
      <ClearButtonContainer>
        <ClearButton onClick={onClear}>Clear history</ClearButton>
      </ClearButtonContainer>
    </div>
  );
}

const HistoryListItem = styled.div`
  margin-bottom: 20px;
`;

const HistoryListItemDate = styled.div`
  color: ${(p) => p.theme.colors.gray.dark};
  font-size: 14px;
`;

const HistoryListItemTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  margin-top: 2px;
  transition: color 0.2s ease;
`;

const ClearButtonContainer = styled.div`
  text-align: center;
`;

const ClearButton = styled.button`
  background-color: ${(p) => p.theme.colors.gray.light};
  color: ${(p) => p.theme.colors.gray.dark};
  padding: 10px 25px;
  font-size: 16px;
  border-radius: 8px;
`;
