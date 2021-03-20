import { useForm } from 'react-hook-form';
import { IoSearch, IoCloseCircleOutline } from 'react-icons/io5';
import styles from './Search.module.scss';

export default function Search({ onSearch }) {
  const { register, handleSubmit, reset } = useForm({ mode: 'onChange' });

  return (
    <div className={styles.search}>
      <form onSubmit={handleSubmit(onSearch)}>
        <input type="text" placeholder="Search..." name="search" ref={register} />
        <button
          className={styles.reset}
          onClick={() => {
            reset();
            handleSubmit(onSearch);
          }}
        >
          <IoCloseCircleOutline />
        </button>
        <button type="submit">
          <IoSearch />
        </button>
      </form>
    </div>
  );
}
