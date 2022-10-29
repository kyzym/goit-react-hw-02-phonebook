import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsList } from './ContactsList';
import initialContacts from './contacts.json';
import { Form } from './Form';

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

    this.setState(({ contacts }) => ({ contacts: [newContact, ...contacts] }));
  };

  render() {
    const { contacts } = this.state;
    const { deleteContact } = this;

    return (
      <>
        <Form onSubmit={this.addContact} />

        <ContactsList contacts={contacts} onDeleteContact={deleteContact} />

        <div>
          <span>Общее количество контактов: {contacts.length}</span>
        </div>
      </>
    );
  }
}
