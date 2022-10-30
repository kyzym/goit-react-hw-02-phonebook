import { PropTypes } from 'prop-types';
import { FilterInput, FilterLabel } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <FilterLabel>
    Find contacts by name:
    <FilterInput
      type="text"
      name="filter"
      placeholder="Enter name"
      value={value}
      onChange={onChange}
    ></FilterInput>
  </FilterLabel>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
