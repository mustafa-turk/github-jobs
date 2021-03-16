import styles from './PageLayout.module.scss';

export default function PageLayout({ children }) {
  return (
    <div className={styles.wrapper}>
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
