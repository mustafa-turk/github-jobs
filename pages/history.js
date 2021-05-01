import HomePageLayout from 'components/common/layout/HomePageLayout';
import HistoryList from 'components/history/HistoryList';
import Navbar from 'components/home/Navbar';
import useHistory from 'hooks/useHistory';

export default function HistoryPage() {
  const { history, clearHistory } = useHistory();

  return (
    <HomePageLayout>
      <Navbar />
      <HistoryList history={history} onClear={clearHistory} />
    </HomePageLayout>
  );
}
