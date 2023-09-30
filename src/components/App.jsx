// import { useState } from 'react';
// import { nanoid } from 'nanoid';
// import { TitleText } from './Phonebook.styled';
// import { Wrapper } from './Phonebook.styled';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { Title } from './Phonebook.styled';
// import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const App = () => {
  // const [contacts, setContacts] = useState([]);
  // const [search, setSearch] = useState('');

  const contactState = useSelector(state => state.contacts);
  console.log(contactState);
  // useEffect(() => {
  //   const savedData = localStorage.getItem('item');
  //   if (savedData !== null) {
  //     setContacts(JSON.parse(savedData));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('item', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = newContact => {
  //   const contactInList = contacts.find(
  //     contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
  //   );
  //   if (contactInList) {
  //     alert(`${contactInList.name} is already in contacts`);
  //   } else {
  //     setContacts(prevItem => [...prevItem, { id: nanoid(), ...newContact }]);
  //   }
  // };

  // const inputSearch = e => {
  //   setSearch(e.target.value);
  // };

  // const filteredContacts = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(search.toLowerCase())
  //   );
  // };
  // const deleteContact = contact => {
  //   setContacts(prevItem => prevItem.filter(item => item.id !== contact));
  // };

  // return (
  //   <Wrapper>
  //     <Title>Phonebook</Title>
  //     <ContactForm onAdd={addContact} />
  //     <Filter onSearch={inputSearch} />
  //     <TitleText>Contacts</TitleText>
  //     <ContactList onFilter={filteredContacts()} onDelete={deleteContact} />
  //   </Wrapper>
  // );
};
