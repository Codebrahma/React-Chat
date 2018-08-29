import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchBox = styled.div`
  box-shadow: 0 -5px 5px -5px $input-box-shadow;
`;

const SearchInput = styled.input`
  box-sizing: border-box;
  border: none;
  outline: none;
  padding: 10px;
  width: 100%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const ChatListSearch = props => (
  <SearchBox>
    <SearchInput
      type="text"
      placeholder="Search users..."
      onChange={(e) => {
        props.handleSearchChange(e.target.value);
      }}
    />
  </SearchBox>
);

ChatListSearch.propTypes = {
  handleSearchChange: PropTypes.func.isRequired,
};

export default ChatListSearch;
