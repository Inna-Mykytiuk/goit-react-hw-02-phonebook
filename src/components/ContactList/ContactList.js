import { FaTrashAlt } from 'react-icons/fa';

export const ContactList = ({ contacts = [], deleteContact }) => (
  <div>
    <ul>
      {contacts.map((contact, id) => (
        <li key={id}>
          {contact.name}: {contact.number}
          <button type="button" onClick={() => deleteContact(contact.id)}>
            <FaTrashAlt
              style={{
                cursor: 'pointer',
                color: 'crimson',
              }}
            />
          </button>
        </li>
      ))}
    </ul>
  </div>
);
