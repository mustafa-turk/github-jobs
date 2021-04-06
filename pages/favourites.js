import { map } from 'lodash';
import useFavourites from 'hooks/useFavourites';
import PageLayout from 'components/shared/layout/PageLayout';
import Header from 'components/home/header/Header';
import Navbar from 'components/home/navbar/Navbar';
import FavouritesList from 'components/favourites/FavouritesList';
import { ListItem } from 'components/home/list/JobsList';

export default function HistoryPage() {
  const { favourites, removeFavorite } = useFavourites();

  return (
    <PageLayout>
      <Header />
      <Navbar />
      <FavouritesList isLoading={false} isEmpty={false}>
        {map(favourites, (fav) => <ListItem details={fav} isFaved={true} onFavClick={() => removeFavorite(fav.id)} />)}
      </FavouritesList>
    </PageLayout>
  );
}
