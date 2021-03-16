import Head from 'next/head';
import styles from './PageLayout.module.scss';

export default function PageLayout({ children, title }) {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      {children}
    </div>
  );
}

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <img src="/github.svg" alt="logo" width="40px" />
    </div>
  );
}
