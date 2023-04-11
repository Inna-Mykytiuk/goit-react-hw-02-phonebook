import { FaTrashAlt } from 'react-icons/fa';
import { ListItem, ItemWrapper } from './ContactList.styled';

export const ContactList = ({ contacts = [], deleteContact }) => (
  <div>
    <ul>
      {contacts.map((contact, id) => (
        <ListItem key={id}>
          <ItemWrapper>
            <p>{contact.name}: </p>
            <p>{contact.number}</p>
          </ItemWrapper>

          <button type="button" onClick={() => deleteContact(contact.id)}>
            <FaTrashAlt
              style={{
                cursor: 'pointer',
                color: 'crimson',
              }}
            />
          </button>
        </ListItem>
      ))}
    </ul>
  </div>
);
