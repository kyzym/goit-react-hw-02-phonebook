import { Component } from 'react';
// import { nanoid } from 'nanoid';
import { ContactsList } from './ContactsList';
import initialContacts from './contacts.json';

export class App extends Component {
  state = {
    contacts: initialContacts,
    name: '',
  };

  deleteContact = contactId => {
    this.setState(p => ({
      contacts: p.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log(`Name: ${this.state.name}`);

    this.props.onSubmit({ ...this.state });
  };

  render() {
    const { name, contacts } = this.state;
    const { deleteContact } = this;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
              placeholder="Enter name"
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <ContactsList contacts={contacts} onDeleteContact={deleteContact} />

        <div>
          <span>Общее количество контактов: {contacts.length}</span>
        </div>
      </>
    );
  }
}
