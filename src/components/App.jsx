import { TitleText, Wrapper, Title } from './Phonebook.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />
      <Filter />
      <TitleText>Contacts</TitleText>
      <ContactList />
    </Wrapper>
  );
};
