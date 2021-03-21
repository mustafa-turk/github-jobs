import { useRouter } from 'next/router';
import { IoArrowBack as ArrowBackIcon } from 'react-icons/io5';
import styles from './Topbar.module.scss';

export default function Topbar() {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <button onClick={() => router.back()}>
        <ArrowBackIcon />
      </button>
      <span>DETAILS</span>
      <div />
    </div>
  );
}
