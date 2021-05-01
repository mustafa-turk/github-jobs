import { map } from 'lodash';
import { ListItem } from 'components/home/JobsList';
import Navbar from 'components/home/Navbar';
import HomePageLayout from 'components/common/layout/HomePageLayout';
import useFavourites from 'hooks/useFavourites';

export default function HistoryPage() {
  const { favourites, removeFavorite } = useFavourites();

  return (
    <HomePageLayout>
      <Navbar />
      <div>
        {map(favourites, (fav) => (
          <ListItem details={fav} isFaved={true} onFavClick={() => removeFavorite(fav.id)} />
        ))}
      </div>
    </HomePageLayout>
  );
}
