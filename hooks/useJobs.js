import { useQuery } from 'react-query';
import { fetchJobs } from '../lib/api';

export default function useJobs() {
  const { data, isLoading } = useQuery('todos', fetchJobs);

  return {
    jobs: data?.data?.jobs,
    loading: isLoading,
  };
}
