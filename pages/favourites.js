import { map } from 'lodash';
import useFavourites from 'hooks/useFavourites';
import FavouritesList from 'components/favourites/FavouritesList';
import { ListItem } from 'components/home/list/JobsList';
import HomePageLayout from 'components/layout/HomePageLayout';

export default function HistoryPage() {
  const { favourites, removeFavorite } = useFavourites();

  return (
    <HomePageLayout>
      <FavouritesList isLoading={false} isEmpty={false}>
        {map(favourites, (fav) => <ListItem details={fav} isFaved={true} onFavClick={() => removeFavorite(fav.id)} />)}
      </FavouritesList>
    </HomePageLayout>
  );
}
