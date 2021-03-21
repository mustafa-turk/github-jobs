import { useRouter } from 'next/router';
import useJobDetails from 'hooks/useJobDetails';
import PageLayout from 'components/shared/layout/PageLayout';
import Topbar from 'components/details/topbar/Topbar';
import Content from 'components/details/content/Content';

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const { details, loading } = useJobDetails(id);

  return (
    <PageLayout title={details?.title}>
      <Topbar />
      <Content details={details} loading={loading} />
    </PageLayout>
  );
}
