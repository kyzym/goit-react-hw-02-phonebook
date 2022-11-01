import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Button, FormTag, Input, Label } from './ContactForm.styled';

export class Form extends Component {
  state = { name: '', number: '' };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    const { props, state } = this;
    e.preventDefault();

    props.onSubmit(state);

    e.currentTarget.reset();
  };

  render() {
    const { handleSubmit, handleChange } = this;

    return (
      <FormTag onSubmit={handleSubmit}>
        <Label>
          Name:
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            placeholder="Enter name"
          />
        </Label>
        <Label>
          Number:
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            placeholder="Enter number"
          />
        </Label>

        <Button type="submit">add contact</Button>
      </FormTag>
    );
  }
}

Form.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
};
