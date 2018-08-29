import React from 'react';
import PropTypes from 'prop-types';
import ChatWindowHeader from './ChatWindowHeader';
import ChatWindowSend from './ChatWindowSend';
import ChatWindowBody from './ChatWindowBody';

const ChatWindowProvider = (props) => {
  const { theme, children, userData } = props;

  let CustomItems;

  if (children) {
    CustomItems = (Array.isArray(children)
      ? children.map(child => React.cloneElement(child, { ...props }))
      : React.cloneElement(children, { ...props })
    );
  }
  return (
    <div className={theme.provider}>
      {
        children
          ? <CustomItems />
          : (
            <div>
              <props.customHeader userData={userData} {...props} />
              <props.customChatWindow userData={userData} {...props} />
              <props.customInput {...props} />
            </div>
          )
      }
    </div>
  );
};

ChatWindowProvider.propTypes = {
  customHeader: PropTypes.func,
  customChatWindow: PropTypes.func,
  customInput: PropTypes.func,
  userData: PropTypes.oneOfType([PropTypes.array,
    PropTypes.object]).isRequired,
  theme: PropTypes.oneOfType([PropTypes.object]).isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

ChatWindowProvider.defaultProps = {
  customHeader: ChatWindowHeader,
  customChatWindow: ChatWindowBody,
  customInput: ChatWindowSend,
  children: null,
};

export default ChatWindowProvider;
