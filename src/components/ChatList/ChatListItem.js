import React from 'react';
import PropTypes from 'prop-types';
import UserName from '../customcomponents/UserName';
import Avatar from '../customcomponents/Avatar';
import ListItem from '../customcomponents/ListItem';

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
      <span style={{ fontSize: '0.7em', color: '#a1a1a1' }}>
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
