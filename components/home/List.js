import Link from 'next/link';
import styles from './List.module.scss';

export function List({ children, isLoading, isEmpty }) {
  if (isLoading) {
    return 'loading...';
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
