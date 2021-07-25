import React from 'react';
import { SearchIcon } from '../../icons/SearchIcon';
import { SearchBarContainer, SearchIconContainer, SearchBarInput } from './SearchBar.styled'

export const SearchBar = () => (
  <SearchBarContainer>
    <form>
      <SearchBarInput type="text" placeholder="Search by name" />
      <SearchIconContainer>
        <SearchIcon />
      </SearchIconContainer>
    </form>
  </SearchBarContainer>
)
