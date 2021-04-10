import { filter, findIndex, orderBy } from 'lodash';
import useLocalStorage from './useLocalStorage';

export default function useFavourites() {
  const [favedJobs, setFavedJobs] = useLocalStorage('favourites', []);

  function getFavourites() {
    return orderBy(favedJobs, ({ date }) => new Date(date), ['desc']);
  }

  function removeFavorite(id) {
    setFavedJobs(filter([...favedJobs], (fav) => fav.id !== id));
  }

  function setFavourites({ id, title, company, location, isNew }) {
    const existingFavId = findIndex(favedJobs, (fav) => fav.id === id);
    const isAlreadyFaved = existingFavId === -1 ? false : true;

    if (isAlreadyFaved) {
      removeFavorite(id);
      return;
    }
    setFavedJobs([...favedJobs, { id, title, company, location, date: new Date(), isNew }]);
  }

  return {
    favourites: getFavourites(),
    setFavourites,
    removeFavorite,
  };
}
