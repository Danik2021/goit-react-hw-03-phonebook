import React from 'react';
import css from './Contacts.module.css';

// components
import { ContactsItem } from 'components/ContactsItem/ContactsItem';

export const Contacts = ({ onDeleteContact, contacts, filter }) => {
  const renderContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <ul className={css.contactsList}>
      {renderContacts().map(({ id, name, number }) => (
        <ContactsItem
          key={id}
          id={id}
          name={name}
          number={number}
          filter={filter}
          onDelete={onDeleteContact}
        />
      ))}
    </ul>
  );
};
