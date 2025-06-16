import React from 'react';

// libraries
import PropTypes from 'prop-types';

export const ContactsItem = ({ id, name, number, onDelete }) => {
  return (
    <li key={id} className="contactsListItem">
      <span className="contactsListItemName">{name}</span>:
      <span className="contactsListItemNumber">{number}</span>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
