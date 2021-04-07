import { map } from 'lodash';
import useFavourites from 'hooks/useFavourites';
import { ListItem } from 'components/home/JobsList';
import HomePageLayout from 'components/shared/layout/HomePageLayout';

export default function HistoryPage() {
  const { favourites, removeFavorite } = useFavourites();

  return (
    <HomePageLayout>
      <div>
        {map(favourites, (fav) => (
          <ListItem details={fav} isFaved={true} onFavClick={() => removeFavorite(fav.id)} />
        ))}
      </div>
    </HomePageLayout>
  );
}
