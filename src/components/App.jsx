import { nanoid } from 'nanoid';
import { TitleText } from './Phonebook.styled';
import { Wrapper } from './Phonebook.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title } from './Phonebook.styled';
import { useDispatch, useSelector } from 'react-redux';

import {
  inputFilteredContacts,
  getLocalStorage,
  addContact,
  deleteContact,
} from 'redux/store';

import { useEffect } from 'react';
export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  useEffect(() => {


    const savedData = localStorage.getItem('item');

    if (savedData !== null) {
      dispatch(getLocalStorage(JSON.parse(savedData)));
    }
  }, [dispatch]);
  if (contacts.length !== 0){
    localStorage.setItem('item', JSON.stringify(contacts));
  }



  const addNewContact = newContact => {
    const contactInList = contacts.find(
      contact =>
        contact.name &&
        newContact.name &&
        contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (contactInList) {
      alert(`${contactInList.name} is already in contacts`);
    } else {
      dispatch(addContact({ id: nanoid(), ...newContact }));
    }
  };

  const inputSearchFilter = e => {
    dispatch(inputFilteredContacts(e.target.value));
  };

  const filteredContacts = () => {
    return contacts.filter(
      contact =>
        contact.name &&
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const removeContact = contact => {
    dispatch(deleteContact(contacts.filter(item => item.id !== contact)));
  };

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm onAdd={addNewContact} />
      <Filter onSearch={inputSearchFilter} />
      <TitleText>Contacts</TitleText>
      <ContactList onFilter={filteredContacts()} onDelete={removeContact} />
    </Wrapper>
  );
};
