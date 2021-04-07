import { find, startCase } from 'lodash';
import Skeleton from 'react-loading-skeleton';
import { IoOpenOutline as OpenIcon } from 'react-icons/io5';
import { AiFillStar as StarIcon } from 'react-icons/ai';
import styles from './Content.module.scss';
import useFavourites from 'hooks/useFavourites';

export default function Content({ loading, details }) {
  if (loading) return <ContentLoading />;

  const { favourites, setFavourites } = useFavourites();

  const isFaved = find(favourites, (fav) => fav.id === details.id);
  const href = details['how_to_apply'].split('href="').pop().split('"')[0];
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h1>{details.title}</h1>
        <p>
          <a
            href={details.company_url}
            rel="noopener noreferrer"
            target="_blank"
          >{`${details.company}`}</a>
          {` - ${startCase(details.location)}`}
        </p>
        <p></p>
      </div>
      <div className={styles.actions}>
        <a href={href} rel="noopener noreferrer" target="_blank">
          <button className={styles.apply}>
            Apply now
          </button>
        </a>
        <button className={isFaved ? styles.saved : styles.unsaved} onClick={() => setFavourites(details)}>
          <StarIcon />
        </button>
      </div>
      <div className={styles.description}>
        <h2 className={styles.descriptionHeader}>Description</h2>
        <div dangerouslySetInnerHTML={{ __html: details.description }} />
      </div>
    </div>
  );
}

function ContentLoading() {
  return (
    <div className={styles.wrapperLoading}>
      <div className={styles.heading}>
        <h1>
          <Skeleton />
        </h1>
        <p>
          <Skeleton />
        </p>
        <p>
          <Skeleton />
        </p>
      </div>
      <div className={styles.description}>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
      <div className={styles.description}>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  );
}
