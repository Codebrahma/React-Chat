import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import defaultTheme from '../../themes/_default_theme.scss';

const ChatListHeader = (props) => {
  const { theme, userData } = props;
  return (
    <div className={theme.header}>
      <span>
Active Users (
        {userData.filter(data => data.onlineStatus === 'online').length}
)
      </span>
    </div>
  );
};

ChatListHeader.propTypes = {
  userData: PropTypes.oneOfType([PropTypes.array]).isRequired,
  theme: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default themr('ThemedChatListHeader', defaultTheme, { composeTheme: 'softly' })(ChatListHeader);