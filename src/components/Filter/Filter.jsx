import { FindForm } from 'components/Phonebook.styled';
import { inputFilteredContacts } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const inputSearchFilter = e => {
    dispatch(inputFilteredContacts(e.target.value));
  };
  return (
    <FindForm>
      <input
        type="text"
        onChange={e => {
          inputSearchFilter(e);
        }}
      />
      Find contacts by name
    </FindForm>
  );
};
