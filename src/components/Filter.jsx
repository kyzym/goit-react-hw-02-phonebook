// import { PropTypes } from 'prop-types';

export const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name:
    <input
      type="text"
      name="filter"
      placeholder="Enter name"
      value={value}
      onChange={onChange}
    ></input>
  </label>
);
