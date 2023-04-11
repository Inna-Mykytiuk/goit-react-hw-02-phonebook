import { FaTrashAlt } from 'react-icons/fa';

export const ContactItem = ({ contacts, deleteContact }) => {
  return contacts.map(contact => (
    <li key={contact.id}>
      <p>{contact.name}</p>
      <p>{contact.number}</p>

      <button
        type="button"
        onClick={() => {
          deleteContact(contact.id);
        }}
      >
        <FaTrashAlt
          style={{
            cursor: 'pointer',
            color: 'crimson',
          }}
        />
      </button>
    </li>
  ));
};
