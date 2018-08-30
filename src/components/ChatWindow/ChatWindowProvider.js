import React, { Component } from 'react';
import { themr } from 'react-css-themr';
import PropTypes from 'prop-types';
import defaultTheme from '../../themes/_default_theme.scss';
import ChatWindowHeader from './ChatWindowHeader';
import ChatWindowSend from './ChatWindowSend';
import ChatWindowBody from './ChatWindowBody';

class ChatWindowProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputMessage: '',
      messages: [],
    };
  }

  handleMessages = ({ userId, message }) => {
    this.setState(prevState => ({
      messages: [...prevState.messages, { userId, message }],
    }));
  };


  render() {
    const {
      theme,
      children,
      userData,
      myData,
      handleCloseClick,
      customHeader,
      customInput,
      customChatWindow,
    } = this.props;
    const { inputMessage, messages } = this.state;
    let CustomItems;

    const CustomHeader = customHeader;
    const CustomInput = customInput;
    const CustomChatWindow = customChatWindow;

    if (children) {
      CustomItems = Array.isArray(children)
        ? children.map(child => React.cloneElement(child, { ...this.props }))
        : React.cloneElement(children, { ...this.props });
    }
    return (
      <div className={theme.windowprovider}>
        {children ? (
          <CustomItems />
        ) : (
          <div>
            <CustomHeader
              userData={userData}
              handleCloseClick={handleCloseClick}
              theme={theme}
            />
            <CustomChatWindow
              userData={userData}
              messages={messages}
              myData={myData}
              theme={theme}
            />
            <CustomInput
              onSend={this.onSend}
              inputValue={inputMessage}
              handleMessages={this.handleMessages}
              myData={myData}
              theme={theme}
            />
          </div>
        )}
      </div>
    );
  }
}

ChatWindowProvider.propTypes = {
  customHeader: PropTypes.func,
  customChatWindow: PropTypes.func,
  customInput: PropTypes.func,
  userData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  myData: PropTypes.oneOfType([PropTypes.object]).isRequired,
  theme: PropTypes.oneOfType([PropTypes.object]).isRequired,
  handleCloseClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

ChatWindowProvider.defaultProps = {
  customHeader: ChatWindowHeader,
  customChatWindow: ChatWindowBody,
  customInput: ChatWindowSend,
  children: null,
};

export default themr('ThemedChatWindowProvider', defaultTheme, {
  composeTheme: 'softly',
})(ChatWindowProvider);
