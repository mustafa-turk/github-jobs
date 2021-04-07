import styled from 'styled-components';
import { isEmpty } from 'lodash';
import { useForm } from 'react-hook-form';
import { SearchIcon, CloseIcon } from 'components/shared/icons';

export default function Search({ onSearch, onReset }) {
  const { register, handleSubmit, reset, watch } = useForm({ mode: 'onChange' });

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSearch)}>
        <SearchInput
          type="text"
          placeholder="Search..."
          name="search"
          ref={register}
          autoComplete="off"
          data-cy="search-input"
        />

        {!isEmpty(watch('search')) ? (
          <ResetButton
            type="button"
            data-cy="search-reset-button"
            onClick={() => {
              reset();
              onReset();
            }}
          >
            <CloseIcon />
          </ResetButton>
        ) : null}
        <SubmitButton type="submit" data-cy="search-button">
          <SearchIcon />
        </SubmitButton>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid ${(p) => p.theme.colors.gray.medium};
  border-radius: 10px;
  padding: 5px;
  @media (max-width: ${(p) => p.theme.breakpoints.md}) {
    margin-bottom: 10px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  border-radius: 5px;
  padding: 12px;
  font-size: 17px;
  @media (max-width: ${(p) => p.theme.breakpoints.md}) {
    font-size: 16px;
  }
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: ${(p) => p.theme.colors.blue.dark};
  color: white;
  border-radius: 5px;
  font-size: 21px;
  font-weight: bold;
`;

const ResetButton = styled.button`
  background: none;
  color: ${(p) => p.theme.colors.gray.dark};
  padding: 0;
  margin-right: 10px;
`;
