import useJobs from '../hooks/useJobs';
import { List, ListItem } from '../components/home/List';
import PageLayout from '../components/shared/PageLayout';

export default function HomePage() {
  const { jobs, loading } = useJobs();

  if (loading) return 'loading';

  if (jobs) {
    return (
      <PageLayout>
        <List>
          {jobs.map((job) => (
            <ListItem key={job.id} details={job} />
          ))}
        </List>
      </PageLayout>
    );
  }
}
