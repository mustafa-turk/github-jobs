import { useEffect } from 'react';
import { useRouter } from 'next/router';
import PageLayout from 'components/common/layout/PageLayout';
import Content from 'components/details/Content';
import Navbar from 'components/details/Navbar';
import useHistory from 'hooks/useHistory';
import useJobDetails from 'hooks/useJobDetails';

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const { setHistory } = useHistory();
  const { details, loading } = useJobDetails(id);

  useEffect(() => {
    if (details) setHistory(id, details.title);
  }, [id, details, setHistory]);

  return (
    <PageLayout title={details?.title}>
      <Navbar />
      <Content details={details} loading={loading} />
    </PageLayout>
  );
}
