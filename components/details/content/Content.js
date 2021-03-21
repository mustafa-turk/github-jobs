import { IoOpenOutline as OpenIcon } from 'react-icons/io5';
import styles from './Content.module.scss';

export default function Content({ loading, details }) {
  if (loading) return null;
  const href = details['how_to_apply'].split('href="').pop().split('"')[0];
  return (
    <div className={styles.wrapper}>
      <h1>{details.title}</h1>
      <div className={styles.actions}>
        <a href={href} rel="noopener noreferrer" target="_blank">
          <button className={styles.apply}>
            Apply <OpenIcon />
          </button>
        </a>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: details.description }}
        className={styles.description}
      />
    </div>
  );
}
