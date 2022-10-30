import { Box } from '../utils/Box.styled';
import { Contact } from './ContactsList.styled';
import { PropTypes } from 'prop-types';

export const ContactsList = ({ contacts, onDeleteContact }) => (
  <Box as="ul" display="grid" gridGap={10}>
    {contacts.map(({ id, name, number }) => (
      <Contact key={id}>
        <p>{name}</p>
        <p>{number}</p>
        <button
          onClick={() => {
            onDeleteContact(id);
          }}
        >
          удалить
        </button>
      </Contact>
    ))}
  </Box>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
