import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 10px 0;
  cursor: pointer;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: ${({ height }) => height || '37px'};
`;

const UserName = styled.span`
  text-transform: capitalize;
  flex: 2;
  padding-left: 20px;
  margin: 0;
  font-size: ${({ fontSize }) => fontSize || '0.9rem'}
`;

const ChatListItem = (props) => {
  const {
    lastSeen,
    id,
    avatar,
    name,
    onlineStatus,
    handleChatItemClick,
  } = props;
  const lastSeenTime = new Date() - lastSeen;
  const lastSeenMinutes = Math.ceil(lastSeenTime / (1000 * 60));
  const lastSeenHours = Math.floor(lastSeenMinutes / 60);
  const lastSeenDays = Math.floor(lastSeenHours / 24);

  let computedLastSeen = lastSeenMinutes > 0 ? `${lastSeenMinutes}m` : '';
  computedLastSeen = lastSeenHours > 0 ? `${lastSeenHours}h` : computedLastSeen;
  computedLastSeen = lastSeenDays > 0 ? `${lastSeenDays}d` : computedLastSeen;

  return (
    <ListItem id={id} onClick={() => handleChatItemClick(id)}>
      <Avatar src={avatar} alt={name.slice(0, 1).toUpperCase()} />
      <UserName>
        {name}
      </UserName>
      <span>
        {onlineStatus === 'offline' && computedLastSeen}
      </span>
    </ListItem>
  );
};

ChatListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onlineStatus: PropTypes.string.isRequired,
  handleChatItemClick: PropTypes.func.isRequired,
  lastSeen: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default ChatListItem;
