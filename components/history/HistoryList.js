import { formatDistance } from "date-fns";
import Link from "next/link";
import styles from "./HistoryList.module.scss";

export default function HistoryList({ history, onClear }) {
  return (
    <div className={styles.wrapper}>
      {history.map(({ id, title, date }) => (
        <Link href={`/${id}`}>
          <a>
            <div className={styles.item}>
              <p className={styles.date}>Visited {formatDistance(new Date(date), new Date(), { addSuffix: true })}</p>
              <p className={styles.title}>{title}</p>
            </div>
          </a>
        </Link>
      ))}
      <div className={styles.clearButtonWrapper}>
        <button className={styles.clearButton} onClick={onClear}>Clear history</button>
      </div>
    </div>
  )
}
