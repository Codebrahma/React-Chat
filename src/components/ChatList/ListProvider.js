import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import ChatListItem from './ChatListItem';
import defaultTheme from '../../themes/_default_theme.scss';

const ChatList = (props) => {
  const {
    theme, filteredUserData, userData, searchedFor, customChatListItem,
  } = props;
  const filteredUsers = filteredUserData || userData.filter(
    user => user.name.toLowerCase()
      .includes(searchedFor.toLowerCase()),
  );

  const ChatItem = customChatListItem;
  return (
    <div className={theme.userlist}>
      {
        filteredUsers.length === 0
          ? (
            <span>
              No User Found
            </span>
          )
          : filteredUsers.map(item => (
            <ChatItem
              key={item.id}
              id={item.id}
              avatar={item.avatar}
              name={item.name}
              onlineStatus={item.onlineStatus}
              lastSeen={item.lastSeen}
              {...props}
              {...item}
            />
          ))
      }
    </div>
  );
};

ChatList.propTypes = {
  userData: PropTypes.arrayOf([PropTypes.object]),
  filteredUserData: PropTypes.arrayOf(PropTypes.object),
  searchedFor: PropTypes.string,
  theme: PropTypes.oneOfType([PropTypes.object]).isRequired,
  customChatListItem: PropTypes.func,
};

ChatList.defaultProps = {
  userData: [],
  customChatListItem: ChatListItem,
  filteredUserData: null,
  searchedFor: '',
};

export default themr('ThemedChatList', defaultTheme, { composeTheme: 'softly' })(ChatList);
