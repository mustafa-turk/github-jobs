import { useQuery } from 'react-query';
import axios from 'axios';

export function fetchJobs(searchParams) {
  return axios(`/api/jobs${searchParams || null}`);
}

export default function useJobs(searchParams) {
  const { data, isLoading } = useQuery(['jobs', searchParams], () => fetchJobs(searchParams));

  return {
    jobs: data?.data?.jobs,
    loading: isLoading,
  };
}
