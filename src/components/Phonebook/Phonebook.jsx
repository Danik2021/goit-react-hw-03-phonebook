import React from 'react';

import css from './Phonebook.module.css';

export const Phonebook = ({ onTypeName, onTypeNumber, addContact }) => {
  return (
    <form onSubmit={addContact} className={css.phonebook} action="">
      <label className={css.phonebookLabel}>
        <p className={css.phonebookLabel__text}>Name</p>
        <input
          onChange={onTypeName}
          className={css.phonebookLabel__input}
          type="text"
          name="name"
          required
        />
      </label>
      <label className={css.phonebookLabel}>
        <p className={css.phonebookLabel__text}>Number</p>
        <input onChange={onTypeNumber} type="tel" name="number" required />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
