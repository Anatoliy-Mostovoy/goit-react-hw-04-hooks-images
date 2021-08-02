import React, { useState } from 'react';
import s from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = event => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button className={s.SearchFormButton} type="submit"></button>
        <label>
          <input
            className={s.SearchFormInput}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Search images and photos"
          />
        </label>
      </form>
    </header>
  );
};
