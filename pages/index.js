import { useRouter } from 'next/router';
import { map, isEmpty, find } from 'lodash';
import qs from 'query-string';

import Search from 'components/home/Search';
import HomePageLayout from 'components/common/layout/HomePageLayout';
import Navbar from 'components/home/Navbar';
import useFavourites from 'hooks/useFavourites';
import Title from 'components/common/text/Title';
import Warning from 'components/common/Warning';
import { List, ListItem } from 'components/home/JobsList';

import useJobs from 'hooks/useJobs';

export default function HomePage() {
  const router = useRouter();
  const { jobs, loading } = useJobs(router.asPath);
  const { favourites, setFavourites } = useFavourites();

  return (
    <HomePageLayout>
      <Warning />
      <Navbar />
      <Search
        onSearch={(values) =>
          router.push(`?${qs.stringify({ search: values.search }, { skipEmptyString: true })}`)
        }
        onReset={() => router.push('/')}
      />
      <Title>{router.query?.search ? `Results for "${router.query?.search}"` : "All jobs"}</Title>
      <List isLoading={loading} isEmpty={isEmpty(jobs)}>
        {map(jobs, (job) => (
          <ListItem
            key={job.id}
            details={job}
            isFaved={find(favourites, (fav) => fav.id === job.id)}
            onFavClick={() => setFavourites(job)}
          />
        ))}
      </List>
    </HomePageLayout>
  );
}
