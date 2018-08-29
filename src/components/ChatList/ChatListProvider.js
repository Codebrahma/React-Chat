import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ChatListHeader from './ChatListHeader';
import ChatList from './ChatList';
import ChatListSearch from './ChatListSearch';

const ThemedProvider = styled.div`
  background: ${({ background }) => background || 'rgb(231, 239, 243)'};
  box-shadow: ${({ boxShadow }) => boxShadow || '2px 3px 7px 2px rgba(0, 0, 0, 0.5)'};
  width: ${({ width }) => (width || 200)};
`;

class ChatListProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedFor: '',
    };
  }

  defaultSearchChange = (value) => {
    this.setState({
      searchedFor: value,
    });
  };

  render() {
    const { children, userData, handleSearchChange } = this.props;

    let CustomItems;
    if (children) {
      CustomItems = Array.isArray(children)
        ? children.map(child => React.cloneElement(child, { ...this.props }))
        : React.cloneElement(children, { ...this.props });
    }

    const { searchedFor } = this.state;
    return (
      <ThemedProvider>
        {children ? (
          <CustomItems />
        ) : (
          <div>
            <this.props.customHeader userData={userData} {...this.props} />
            <this.props.customList
              userData={userData}
              searchedFor={searchedFor}
              {...this.props}
            />
            <this.props.customSearch
              handleSearchChange={
                handleSearchChange || this.defaultSearchChange
              }
            />
          </div>
        )}
      </ThemedProvider>
    );
  }
}

ChatListProvider.propTypes = {
  customHeader: PropTypes.func,
  customList: PropTypes.func,
  customSearch: PropTypes.func,
  userData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  handleSearchChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

ChatListProvider.defaultProps = {
  customHeader: ChatListHeader,
  customList: ChatList,
  customSearch: ChatListSearch,
  handleSearchChange: null,
  children: null,
};

export default ChatListProvider;
