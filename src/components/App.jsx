import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Box } from './utils/Box.styled';
import initialContacts from './data/contacts.json';
import { FcContacts, FcList } from 'react-icons/fc';
import { Form } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactList/ContactsList';
import { Filter } from './Filter/Filter';
import { Title, SubTitle } from './ContactsForm/ContactForm.styled';

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (this.state.contacts.some(contact => contact.name === name)) {
      return Notify.warning("Can't add already existing contact");
    }

    this.setState(({ contacts }) => ({ contacts: [newContact, ...contacts] }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const { deleteContact, addContact, changeFilter } = this;

    const normalizedFilter = filter.toLowerCase().trim();
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={10}
        px={10}
      >
        <Title>
          Phonebook
          <FcContacts />
        </Title>
        <Form onSubmit={addContact} />

        <SubTitle>
          Contacts
          <FcList />
        </SubTitle>
        <Filter value={filter} onChange={changeFilter} />
        <ContactsList
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
        />

        <div>
          <span>Total number of contacts: {contacts.length}</span>
        </div>
      </Box>
    );
  }
}
