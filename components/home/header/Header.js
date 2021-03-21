import styles from './Header.module.scss';

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <img src="/github.svg" alt="logo" width="40px" />
      <p className={styles.name}>GITHUB JOBS</p>
      <h1>Jobs for developers</h1>
    </div>
  );
}
