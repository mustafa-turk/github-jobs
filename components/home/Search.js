import { useForm } from 'react-hook-form';
import styles from './Search.module.scss';

export default function Search({ onSearch }) {
  const { register, handleSubmit } = useForm();

  return (
    <div className={styles.search}>
      <form onSubmit={handleSubmit(onSearch)}>
        <input type="text" placeholder="Title" name="title" ref={register} />
        <input type="text" placeholder="Location" name="location" ref={register} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
