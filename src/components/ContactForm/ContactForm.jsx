import { nanoid } from 'nanoid';
import { InputForm, ButtonAdd, StyledForm } from 'components/Phonebook.styled';
import { Formik, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import * as Yup from 'yup';
const PhonebookSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required.')
    .matches(
      /[a-zA-Zа-яА-ЯЄєІіЇї]+(([' -][a-zA-Zа-яА-ЯЄєІіЇї ])?[a-zA-Zа-яА-ЯЄєІіЇї]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    ),
  number: Yup.string()
    .min(7, 'Too Short!')
    .max(17, 'Too Long!')
    .required('Required.')
    .matches(
      /^(?:\+?\d{1,4}\(\d{2,3}\)\d{3}-\d{2}-\d{2}|\+?\d{1,4}\d{3}-\d{2}-\d{2}|\+?\d{1,4}\(\d{2,3}\)\d{3}\d{2}\d{2}|\d{3}-\d{2}-\d{2})$/,
      'Invalid phone number format'
    ),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

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

  return (
    <InputForm>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={PhonebookSchema}
        onSubmit={(values, { resetForm }) => {
          addNewContact(values);
          resetForm();
        }}
      >
        {({ dirty, isValid }) => (
          <StyledForm>
            <label htmlFor="name">Name </label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" />
            <label htmlFor="number">Number</label>
            <Field name="number" type="tel" />
            <ErrorMessage name="number" />
            <ButtonAdd type="submit" disabled={!dirty || !isValid}>
              Add contact
            </ButtonAdd>
          </StyledForm>
        )}
      </Formik>
    </InputForm>
  );
};
