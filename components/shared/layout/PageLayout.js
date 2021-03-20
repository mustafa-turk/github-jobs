import Head from 'next/head';
import styles from './PageLayout.module.scss';

export default function PageLayout({ children, title }) {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>{title || 'GitHub Jobs'}</title>
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
      <p className={styles.name}>GITHUB JOBS</p>
      <h1>Jobs for devs</h1>
    </div>
  );
}
