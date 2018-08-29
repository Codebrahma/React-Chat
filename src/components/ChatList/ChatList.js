import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ChatListItem from './ChatListItem';


const List = styled.div`
padding: ${({ padding }) => (padding || '0 1em')};
overflow-y: scroll;
height: ${({ height }) => height || '40vh'};
color: #3b444b;
`;

const ChatList = (props) => {
  const {
    filteredUserData, userData, searchedFor, customChatListItem,
  } = props;
  const filteredUsers = filteredUserData || userData.filter(
    user => user.name.toLowerCase()
      .includes(searchedFor.toLowerCase()),
  );

  const ChatItem = customChatListItem;
  return (
    <List>
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
    </List>
  );
};

ChatList.propTypes = {
  userData: PropTypes.oneOfType([PropTypes.array]).isRequired,
  filteredUserData: PropTypes.arrayOf(PropTypes.object),
  searchedFor: PropTypes.string,
  customChatListItem: PropTypes.func,
};

ChatList.defaultProps = {
  customChatListItem: ChatListItem,
  filteredUserData: null,
  searchedFor: '',
};

export default ChatList;
