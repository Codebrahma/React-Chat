import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import defaultTheme from '../../themes/_default_theme.scss';

const ChatWindowHeader = (props) => {
  const { theme, userData, handleCloseClick } = props;
  // const avatar = { myData };
  // const userAvatar = require(avatar);
  return (
    <div className={theme.windowHeader}>
      <img
        src={userData.avatar}
        alt={userData.name.slice(0, 1).toUpperCase()}
        className={theme.chatWindowAvatar}
      />
      <span className={theme.chatUserName}>
        {userData.name}
      </span>
      <div onClick={() => handleCloseClick(userData.id)}>
        <i className="fas fa-times" />
      </div>
    </div>
  );
};

ChatWindowHeader.propTypes = {
  userData: PropTypes.oneOfType([PropTypes.object]).isRequired,
  theme: PropTypes.oneOfType([PropTypes.object]).isRequired,
  handleCloseClick: PropTypes.func.isRequired,
};

export default themr('ThemedChatWindowHeader', defaultTheme, { composeTheme: 'softly' })(ChatWindowHeader);
