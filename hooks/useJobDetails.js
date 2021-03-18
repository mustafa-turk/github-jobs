import { useQuery } from 'react-query';
import axios from 'axios';

export function fetchJobDetails(id) {
  return axios(`/api/details/${id}`);
}

export default function useJobDetails(id) {
  const { data, isLoading } = useQuery(['job', id], () => fetchJobDetails(id));

  return {
    details: data?.data?.details,
    loading: isLoading,
  };
}
