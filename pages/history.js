import useHistory from 'hooks/useHistory';
import PageLayout from 'components/layout/PageLayout';
import Header from 'components/home/header/Header';
import Navbar from 'components/home/navbar/Navbar';
import HistoryList from 'components/history/HistoryList';

export default function HistoryPage() {
  const { history, clearHistory } = useHistory();

  return (
    <PageLayout>
      <Header />
      <Navbar />
      <HistoryList history={history} onClear={clearHistory} />
    </PageLayout>
  );
}
