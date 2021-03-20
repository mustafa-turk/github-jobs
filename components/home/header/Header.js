import styles from './Header.module.scss';

export default function Header() {
  return (
    <div className={styles.navbar}>
      <img src="/github.svg" alt="logo" width="40px" />
      <p className={styles.name}>GITHUB JOBS</p>
      <h1>Jobs for devs</h1>
    </div>
  );
}
