import { useRouter } from 'next/router';
import { map, isEmpty } from 'lodash';
import qs from 'query-string';
import useJobs from 'hooks/useJobs';
import { List, ListItem } from 'components/home/list/List';
import PageLayout from 'components/shared/layout/PageLayout';
import Search from 'components/home/search/Search';

export default function HomePage() {
  const router = useRouter();
  const { jobs, loading } = useJobs(router.asPath);

  return (
    <PageLayout>
      <Search
        onSearch={(values) =>
          router.push(`?${qs.stringify({ search: values.search }, { skipEmptyString: true })}`)
        }
      />
      <List isLoading={loading} isEmpty={isEmpty(jobs)}>
        {map(jobs, (job) => (
          <ListItem key={job.id} details={job} />
        ))}
      </List>
    </PageLayout>
  );
}
