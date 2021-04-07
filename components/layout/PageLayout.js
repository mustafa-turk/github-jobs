import Head from 'next/head';
import styles from './PageLayout.module.scss';

export default function PageLayout({ children, title }) {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>{title || 'GitHub Jobs'}</title>
      </Head>
      <div className={styles.content}>{children}</div>
    </div>
  );
}