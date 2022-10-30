import { Box } from '../utils/Box.styled';
import { Contact, DelButton } from './ContactsList.styled';
import { PropTypes } from 'prop-types';
import { BsPhone } from 'react-icons/bs';

export const ContactsList = ({ contacts, onDeleteContact }) => (
  <Box as="ul" width="31%">
    {contacts.map(({ id, name, number }) => (
      <Contact key={id}>
        <BsPhone />
        <p>{name}</p>
        <p>{number}</p>
        <DelButton
          onClick={() => {
            onDeleteContact(id);
          }}
        >
          Delete
        </DelButton>
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
