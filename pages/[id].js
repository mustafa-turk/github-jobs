import { useRouter } from 'next/router';
import useJobDetails from 'hooks/useJobDetails';
import PageLayout from 'components/shared/layout/PageLayout';

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const { details, loading } = useJobDetails(id);

  return (
    <PageLayout title={details?.title}>
      {loading ? 'loading...' : <p>{details.title}</p>}
    </PageLayout>
  );
}
