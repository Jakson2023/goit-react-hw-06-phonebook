import { ListElement } from 'components/ListElement/ListElement';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filters = useSelector(state => state.filter.filter);

  const filteredContacts = () => {
    return contacts.filter(
      contact =>
        contact.name &&
        contact.name.toLowerCase().includes(filters.toLowerCase())
    );
  };

  return (
    <ul>
      {filteredContacts().map(contact => (
        <ListElement key={contact.id} element={contact} />
      ))}
    </ul>
  );
};
