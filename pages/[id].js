import { useRouter } from 'next/router';
import { IoArrowBack } from 'react-icons/io5';

import useJobDetails from 'hooks/useJobDetails';
import PageLayout from 'components/shared/layout/PageLayout';

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const { details, loading } = useJobDetails(id);

  return (
    <PageLayout title={details?.title}>
      <button onClick={() => router.back()}>
        <IoArrowBack />
      </button>
      {loading ? 'loading...' : <p>{details.title}</p>}
    </PageLayout>
  );
}
