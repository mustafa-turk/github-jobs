import { useRouter } from 'next/router';
import useJobDetails from '../hooks/useJobDetails';
import PageLayout from '../components/shared/PageLayout';

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const { details, loading } = useJobDetails(id);

  if (loading) {
    return 'loading...';
  }

  return (
    <PageLayout title={details.title}>
      <p>{details.title}</p>
    </PageLayout>
  );
}
