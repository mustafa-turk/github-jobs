import { useRouter } from 'next/router';
import { FiArrowLeft } from 'react-icons/fi';
import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <div className={styles.wrapper}>
      <NavbarItem slug="/">
        <FiArrowLeft size="21px" />
      </NavbarItem>
    </div>
  )
}

function NavbarItem({ children }) {
  const router = useRouter();
  return (
    <div className={styles.element}>
      <button onClick={() => router.back()}>
        {children}
      </button>
    </div>
  )
}
