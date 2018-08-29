import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ChatWindowHeader from './ChatWindowHeader';
import ChatWindowSend from './ChatWindowSend';
import ChatWindowBody from './ChatWindowBody';

const WindowProvider = styled.div`
background: ${({ background }) => background || 'rgb(231, 239, 243)'};
  box-shadow: ${({ boxShadow }) => boxShadow || '2px 3px 7px 2px rgba(0, 0, 0, 0.5)'};
  width: ${({ width }) => (width || 200)};
`;

const ChatWindowProvider = (props) => {
  const { children, userData } = props;

  let CustomItems;

  if (children) {
    CustomItems = (Array.isArray(children)
      ? children.map(child => React.cloneElement(child, { ...props }))
      : React.cloneElement(children, { ...props })
    );
  }
  return (
    <WindowProvider>
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
    </WindowProvider>
  );
};

ChatWindowProvider.propTypes = {
  customHeader: PropTypes.func,
  customChatWindow: PropTypes.func,
  customInput: PropTypes.func,
  userData: PropTypes.oneOfType([PropTypes.array,
    PropTypes.object]).isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

ChatWindowProvider.defaultProps = {
  customHeader: ChatWindowHeader,
  customChatWindow: ChatWindowBody,
  customInput: ChatWindowSend,
  children: null,
};

export default ChatWindowProvider;
