import { Component } from 'react';
import { nanoid } from 'nanoid';
import initialContacts from './contacts.json';
import { Form } from './Form';
import { ContactsList } from './ContactsList';
import { Filter } from './Filter';

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

    // this.setState(p => console.log(p.filter(item => console.log(item))));
    this.setState(({ contacts }) => ({ contacts: [newContact, ...contacts] }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const { deleteContact } = this;

    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <>
        <Form onSubmit={this.addContact} />
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactsList
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
        />

        <div>
          <span>Общее количество контактов: {contacts.length}</span>
        </div>
      </>
    );
  }
}
