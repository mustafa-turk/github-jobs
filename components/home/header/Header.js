import styles from './Header.module.scss';

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.name}>DEVJOBS</p>
      <h1>Jobs for developers</h1>
    </div>
  );
}
