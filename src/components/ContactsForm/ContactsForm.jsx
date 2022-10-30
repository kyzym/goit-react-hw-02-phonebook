import { Component } from 'react';
import { PropTypes } from 'prop-types';

export class Form extends Component {
  state = { name: '', number: '' };

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = e => {
    const { props } = this;
    e.preventDefault();

    props.onSubmit(this.state);
    console.log(props);
    e.currentTarget.reset();
  };

  render() {
    const { handleSubmit, handleChange } = this;

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            placeholder="Enter name"
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

Form.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
};
