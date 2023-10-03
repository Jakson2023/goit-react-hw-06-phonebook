import { ContactWrapper, ButtonDel } from 'components/Phonebook.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ListElement = ({ element }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const removeContact = contact => {
    dispatch(deleteContact(contacts.filter(item => item.id !== contact)));
  };

  return (
    <ContactWrapper>
      <li>
        {element.name}: {element.number}
      </li>
      <ButtonDel onClick={() => removeContact(element.id)}>delete </ButtonDel>
    </ContactWrapper>
  );
};
