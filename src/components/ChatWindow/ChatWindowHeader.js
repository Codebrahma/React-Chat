import React from 'react';
import PropTypes from 'prop-types';

const ChatWindowHeader = (props) => {
  const { theme, myData, handleCloseClick } = props;
  // const avatar = { myData };
  // const userAvatar = require(avatar);
  return (
    <div className={theme.windowHeader}>
      <img
        src={myData.avatar}
        alt={myData.name.slice(0, 1).toUpperCase()}
        className={theme.chatWindowAvatar}
      />
      <span className={theme.chatUserName}>
        {myData.name}
      </span>
      <div onClick={handleCloseClick}>
        <i className="fas fa-times" />
      </div>
    </div>
  );
};

ChatWindowHeader.propTypes = {
  myData: PropTypes.oneOfType([PropTypes.object]).isRequired,
  theme: PropTypes.oneOfType([PropTypes.object]).isRequired,
  handleCloseClick: PropTypes.func.isRequired,
};

export default ChatWindowHeader;
