import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import ChatListHeader from './ChatListHeader';
import ChatList from './ChatList';
import ChatListSearch from './ChatListSearch';
import defaultTheme from '../../themes/_default_theme.scss';

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
  }

  render() {
    const {
      theme, children, userData, handleSearchChange,
    } = this.props;

    let CustomItems;
    if (children) {
      CustomItems = (Array.isArray(children)
        ? children.map(
          child => React.cloneElement(
            child,
            { ...this.props },
          ),
        ) : React.cloneElement(
          children,
          { ...this.props },
        )
      );
    }

    const { searchedFor } = this.state;
    return (
      <div className={theme.provider}>
        {
          children
            ? <CustomItems /> : (
              <div>
                <this.props.customHeader
                  userData={userData}
                  {...this.props}
                />
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
            )
        }
      </div>
    );
  }
}

ChatListProvider.propTypes = {
  customHeader: PropTypes.func,
  customList: PropTypes.func,
  customSearch: PropTypes.func,
  userData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  handleSearchChange: PropTypes.func,
  theme: PropTypes.oneOfType([PropTypes.object]).isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

ChatListProvider.defaultProps = {
  customHeader: ChatListHeader,
  customList: ChatList,
  customSearch: ChatListSearch,
  handleSearchChange: null,
  children: null,
};

export default themr('ThemedChatListProvider', defaultTheme, { composeTheme: 'softly' })(ChatListProvider);
