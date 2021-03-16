import styles from './List.module.scss';

export function List({ children }) {
  return <div>{children}</div>;
}

export function ListItem({ details }) {
  return (
    <div className={styles.listItem}>
      <p className={styles.listItemTitle}>{details.title}</p>
      <p className={styles.listItemLocation}>
        {details.company} - {details.location}
      </p>
    </div>
  );
}
