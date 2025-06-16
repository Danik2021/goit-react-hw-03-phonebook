import React from 'react';

import css from './Filter.module.css';

export const Filter = ({ onFilterChange }) => {
  return (
    <div className={css.filter}>
      <p className={css.filterTitle}>Find contacts by name </p>
      <input
        onChange={onFilterChange}
        className={css.filterInput}
        type="text"
        name="filter"
      />
    </div>
  );
};
