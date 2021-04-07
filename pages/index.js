import { useRouter } from 'next/router';
import { map, isEmpty, find } from 'lodash';
import qs from 'query-string';
import useJobs from 'hooks/useJobs';
import { List, ListItem } from 'components/home/list/JobsList';
import Search from 'components/home/search/Search';
import useFavourites from 'hooks/useFavourites';
import HomePageLayout from 'components/layout/HomePageLayout';

export default function HomePage() {
  const router = useRouter();
  const { jobs, loading } = useJobs(router.asPath);
  const { favourites, setFavourites } = useFavourites();

  return (
    <HomePageLayout>
      <Search
        onSearch={(values) =>
          router.push(`?${qs.stringify({ search: values.search }, { skipEmptyString: true })}`)
        }
        onReset={() => router.push('/')}
      />
      <List isLoading={loading} isEmpty={isEmpty(jobs)}>
        {map(jobs, (job) =>
          <ListItem
            key={job.id}
            details={job}
            isFaved={find(favourites, (fav) => (fav.id === job.id))}
            onFavClick={() => setFavourites(job)} />)}
      </List>
    </HomePageLayout>
  );
}
