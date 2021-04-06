import { format, formatDistance } from "date-fns";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./HistoryList.module.scss";

export default function HistoryList({ history }) {
  const router = useRouter();

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
    </div>
  )
}
