import React from 'react';
import {
  SearchButton,
  SearchInput,
  SearchbarContainer,
} from './Searchbar.styled';
import { CiSearch } from 'react-icons/ci';

const Searchbar = ({ onSubmit }) => {
  const handleFormSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.query.value.trim();
    if (query) {
      onSubmit(query);
    }
  };
  return (
    <SearchbarContainer onSubmit={handleFormSubmit}>
      <SearchInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        name="query"
      />
      <SearchButton type="submit">
        <CiSearch size={"100%"}/>
      </SearchButton>
    </SearchbarContainer>
  );
};

export default Searchbar;
