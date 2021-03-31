import { startCase } from 'lodash';
import { IoOpenOutline as OpenIcon } from 'react-icons/io5';
import Skeleton from 'react-loading-skeleton';
import styles from './Content.module.scss';

export default function Content({ loading, details }) {
  if (loading) return <ContentLoading />;
  const href = details['how_to_apply'].split('href="').pop().split('"')[0];
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h1>{details.title}</h1>
        <p>{startCase(details.location)}</p>
        <p>{details.company}</p>
      </div>
      <div className={styles.actions}>
        <a href={href} rel="noopener noreferrer" target="_blank">
          <button className={styles.apply}>
            Apply <OpenIcon />
          </button>
        </a>
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
