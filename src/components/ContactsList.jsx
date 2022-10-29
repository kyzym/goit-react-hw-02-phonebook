import { Box } from './utils/Box.styled';
import { Contact } from './ContactsList.styled';
export const ContactsList = ({ contacts, onDeleteContact }) => (
  <Box as="ul" display="grid" gridGap={10}>
    {contacts.map(({ id, name }) => (
      <Contact key={id}>
        <p>{name}</p>
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
