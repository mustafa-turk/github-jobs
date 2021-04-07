import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useJobDetails from 'hooks/useJobDetails';
import useHistory from 'hooks/useHistory';
import PageLayout from 'components/layout/PageLayout';
import Content from 'components/details/content/Content';
import Navbar from 'components/details/navbar/Navbar';

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const { setHistory } = useHistory();
  const { details, loading } = useJobDetails(id);

  useEffect(() => {
    if (details) setHistory(id, details.title);
  }, [id, details]);

  return (
    <PageLayout title={details?.title}>
      <Navbar />
      <Content details={details} loading={loading} />
    </PageLayout>
  );
}
