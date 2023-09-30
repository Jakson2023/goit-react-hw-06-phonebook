import { FindForm } from 'components/Phonebook.styled';

export const Filter = ({ onSearch }) => {
  return (
    <FindForm>
      <input
        type="text"
        onChange={e => {
          onSearch(e);
        }}
      />
      Find contacts by name
    </FindForm>
  );
};
