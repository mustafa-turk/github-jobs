import { useForm } from 'react-hook-form';
import { IoSearch } from 'react-icons/io5';
import styles from './Search.module.scss';

export default function Search({ onSearch }) {
  const { register, handleSubmit } = useForm();

  return (
    <div className={styles.search}>
      <form onSubmit={handleSubmit(onSearch)}>
        <input type="text" placeholder="Search..." name="title" ref={register} />
        <button type="submit">
          <IoSearch />
        </button>
      </form>
    </div>
  );
}
