import { useRouter } from 'next/router';
import { FiClock, FiHome } from 'react-icons/fi';
import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <div className={styles.wrapper}>
      <NavbarItem slug="/">
        <FiHome size="21px" />
      </NavbarItem>
      <NavbarItem slug="/history">
        <FiClock size="21px" />
      </NavbarItem>
    </div>
  )
}

function NavbarItem({ slug, children }) {
  const router = useRouter();
  return (
    <div className={`${styles.element} ${router.pathname === slug ? styles.active : ''}`}>
      <button onClick={() => router.push(slug)}>
        {children}
      </button>
    </div>
  )
}
