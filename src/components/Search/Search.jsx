import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { SearchBar } from '../styles/styledComponents';
import './styles.scss';

const Search = ({ textLabel, action }) => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState('');

  function onFormSubmit(e) {
    e.preventDefault();

    dispatch(action(term));
  }

  function onInputChange(e) {
    setTerm(e.target.value);
  }

  return (
    <div className="search">
      <form onSubmit={onFormSubmit}>
        <div className="field">
          <label>{textLabel}</label>
          <SearchBar value={term} onChange={onInputChange} type="search" />
        </div>
      </form>
    </div>
  );
};

Search.defaultProps = {
  textLabel: 'Search',
};

export default Search;
