import styles from './Content.module.scss';

export default function Content({ loading, details }) {
  if (loading) return null;
  return (
    <div className={styles.wrapper}>
      <h1>{details.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: details.description }} />
    </div>
  );
}
