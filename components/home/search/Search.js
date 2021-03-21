import { isEmpty } from 'lodash';
import { useForm } from 'react-hook-form';
import { IoSearch as SearchIcon, IoCloseCircleOutline as CloseIcon } from 'react-icons/io5';
import styles from './Search.module.scss';

export default function Search({ onSearch }) {
  const { register, handleSubmit, reset, watch } = useForm({ mode: 'onChange' });

  return (
    <div className={styles.search}>
      <form onSubmit={handleSubmit(onSearch)}>
        <input
          type="text"
          placeholder="Search..."
          name="search"
          ref={register}
          autoComplete="off"
        />

        {!isEmpty(watch('search')) ? (
          <button
            type="button"
            className={styles.reset}
            onClick={() => {
              reset();
              handleSubmit(onSearch);
            }}
          >
            <CloseIcon />
          </button>
        ) : null}
        <button type="submit">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}
