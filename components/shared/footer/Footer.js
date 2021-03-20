import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <a href="https://github.com/mustafa-turk/github-jobs"> See source code on GitHub</a>
      </div>
    </div>
  );
}
