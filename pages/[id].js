import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useJobDetails from 'hooks/useJobDetails';
import useHistory from 'hooks/useHistory';
import PageLayout from 'components/shared/layout/PageLayout';
import Content from 'components/details/Content';
import Navbar from 'components/details/Navbar';

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
