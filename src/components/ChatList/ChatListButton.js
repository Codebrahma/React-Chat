import React from 'react';
import Proptypes from 'prop-types';
import { themr } from 'react-css-themr';
import defaultTheme from '../../themes/_default_theme.scss';

const ChatButton = (props) => {
  const handleClick = () => {
    const { handleChatListProvider } = props;
    handleChatListProvider();
  };

  const { theme, iconClass } = props;

  return (
    <div style={{ width: '100%', height: '50px' }}>
      <div className={theme.chatPopupButton} onClick={handleClick}>
        <i className={iconClass} />
      </div>
    </div>
  );
};

ChatButton.propTypes = {
  handleChatListProvider: Proptypes.func.isRequired,
  iconClass: Proptypes.string.isRequired,
  theme: Proptypes.oneOfType([Proptypes.object]).isRequired,
};

export default themr('ThemedChatButton', defaultTheme, { composeTheme: 'softly' })(ChatButton);
