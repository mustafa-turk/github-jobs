import { times } from 'lodash';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
import { AiFillStar } from 'react-icons/ai';
import styles from './JobsList.module.scss';

export function List({ children, isLoading, isEmpty }) {
  if (isLoading) {
    return times(5, (i) => <ListItemLoading key={i} />);
  }
  if (isEmpty) {
    return 'nothing found :(';
  }
  return <div>{children}</div>;
}

export function ListItem({ details, isFaved, onFavClick }) {
  return (
    <div className={styles.wrapper}>
      <Link href={`/${details.id}`}>
        <a>
          <div className={styles.content}>
            <p className={styles.title} data-cy="list-item-title">{details?.title}</p>
            <p className={styles.subtitle} data-cy="list-item-details">
              {details?.company} - {details?.location}
            </p>
          </div>
        </a>
      </Link>
      <button onClick={onFavClick}>
        <AiFillStar size="21px" fill={isFaved ? '#F4B226' : 'gray'} />
      </button>
    </div>
  );
}

export function ListItemLoading() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.titleLoading}>
        <Skeleton />
      </p>
      <p className={styles.subtitleLoading}>
        <Skeleton />
      </p>
    </div>
  );
}
