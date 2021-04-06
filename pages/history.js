import PageLayout from 'components/shared/layout/PageLayout';
import Header from 'components/home/header/Header';
import Navbar from 'components/home/navbar/Navbar';
import useHistory from 'hooks/useHistory';

export default function HistoryPage() {
  const { history } = useHistory();

  return (
    <PageLayout>
      <Header />
      <Navbar />
      {history.map((item) => <p>{item.date} {item.title}</p>)}
    </PageLayout>
  );
}
