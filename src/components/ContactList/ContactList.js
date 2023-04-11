// import { FaTrashAlt } from 'react-icons/fa';

import React from 'react';
// import PropTypes from 'prop-types';
import { List, ListItem, ItemWrapper } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <ListItem key={id}>
        <ItemWrapper>
          <p>{name}:</p>
          <p>{number}</p>
        </ItemWrapper>

        <button type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </ListItem>
    ))}
  </List>
);

// ContactsList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
