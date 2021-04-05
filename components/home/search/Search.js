import { isEmpty } from 'lodash';
import { useForm } from 'react-hook-form';
import { IoSearch as SearchIcon, IoCloseCircleOutline as CloseIcon } from 'react-icons/io5';
import styles from './Search.module.scss';

export default function Search({ onSearch, onReset }) {
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
          data-cy="search-input"
        />

        {!isEmpty(watch('search')) ? (
          <button
            type="button"
            className={styles.reset}
            data-cy="search-reset-button"
            onClick={() => {
              reset();
              onReset();
            }}
          >
            <CloseIcon />
          </button>
        ) : null}
        <button type="submit" data-cy="search-button">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}
