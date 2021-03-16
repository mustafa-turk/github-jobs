import axios from 'axios';

export function fetchJobs() {
  return axios('/api/jobs');
}
