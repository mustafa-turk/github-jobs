import useHistory from 'hooks/useHistory';
import HistoryList from 'components/history/HistoryList';
import HomePageLayout from 'components/layout/HomePageLayout';

export default function HistoryPage() {
  const { history, clearHistory } = useHistory();

  return (
    <HomePageLayout>
      <HistoryList history={history} onClear={clearHistory} />
    </HomePageLayout>
  );
}
