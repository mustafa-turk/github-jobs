import { last, orderBy } from 'lodash';
import useLocalStorage from './useLocalStorage';

export default function useHistory() {
  const [viewedJobs, setViewedJobs] = useLocalStorage('jobs', []);

  function getHistory() {
    return orderBy(viewedJobs, ({ date }) => new Date(date), ['desc']);
  }

  function setHistory(id, title) {
    const lastViewedJobId = last(viewedJobs)?.id;
    if (lastViewedJobId === id) return;
    setViewedJobs([...viewedJobs, { id, title, date: new Date() }]);
  }

  function clearHistory() {
    setViewedJobs([]);
  }
  return {
    history: getHistory(),
    setHistory,
    clearHistory,
  };
}
