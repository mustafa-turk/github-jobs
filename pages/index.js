import { useRouter } from 'next/router';
import { map, isEmpty } from 'lodash';
import qs from 'query-string';
import useJobs from '../hooks/useJobs';
import { List, ListItem } from '../components/home/List';
import PageLayout from '../components/shared/PageLayout';
import Search from '../components/home/Search';

export default function HomePage() {
  const router = useRouter();
  const { jobs, loading } = useJobs(router.asPath);

  function renderJobsListContent() {
    if (loading) {
      return 'loading...';
    }
    if (isEmpty(jobs)) {
      return 'nothing found :(';
    }
    return map(jobs, (job) => <ListItem key={job.id} details={job} />);
  }

  return (
    <PageLayout>
      <Search
        onSearch={(values) =>
          router.push(`?${qs.stringify({ title: values.title, location: values.location })}`)
        }
      />
      <List>{renderJobsListContent()}</List>
    </PageLayout>
  );
}
