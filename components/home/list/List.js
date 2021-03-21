import { times } from 'lodash';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
import styles from './List.module.scss';

export function List({ children, isLoading, isEmpty }) {
  if (isLoading) {
    return times(5, (i) => <ListItemLoading key={i} />);
  }
  if (isEmpty) {
    return 'nothing found :(';
  }
  return <div>{children}</div>;
}

export function ListItem({ details }) {
  return (
    <div className={styles.wrapper}>
      <Link href={`/${details.id}`}>
        <a>
          <p className={styles.title}>{details?.title}</p>
          <p className={styles.subtitle}>
            {details?.company} - {details?.location}
          </p>
        </a>
      </Link>
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
