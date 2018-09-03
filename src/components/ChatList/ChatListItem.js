import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import defaultTheme from '../../themes/_default_theme.scss';
import defaultAvatar from '../../images/user.jpeg';

const ChatListItem = (props) => {
  const {
    lastSeen,
    theme,
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
    <div id={id} className={theme.useritem} onClick={() => handleChatItemClick(id)}>
      <img
        src={avatar}
        className={theme.useravatar}
        alt={name.slice(0, 1).toUpperCase()}
      />
      <span className={theme.username}>
        {name}
      </span>
      <span className={theme[onlineStatus]}>
        {onlineStatus === 'offline' && computedLastSeen}
      </span>
    </div>
  );
};

ChatListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  onlineStatus: PropTypes.string.isRequired,
  handleChatItemClick: PropTypes.func.isRequired,
  theme: PropTypes.oneOfType([PropTypes.object]).isRequired,
  lastSeen: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

ChatListItem.defaultProps = {
  avatar: defaultAvatar,
};

export default themr('ThemedChatListItem', defaultTheme, { composeTheme: 'softly' })(ChatListItem);
