import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Box } from './utils/Box.styled';
import initialContacts from './data/contacts.json';
import { Form } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactList/ContactsList';
import { Filter } from './Filter/Filter';
import { FcContacts, FcList } from 'react-icons/fc';
import { H1, H2 } from './ContactsForm/ContactForm.styled';

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
    this.setState({ filter: e.currentTarget.value.trim() });
  };

  render() {
    const { contacts, filter } = this.state;
    const { deleteContact, addContact, changeFilter } = this;

    const normalizedFilter = this.state.filter.toLowerCase().trim();
    const filteredContacts = this.state.contacts.filter(({ name }) =>
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
        <H1>
          Phonebook
          <FcContacts />
        </H1>
        <Form onSubmit={addContact} />

        <H2>
          Contacts
          <FcList />
        </H2>
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
