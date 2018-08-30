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
    };
  }

  render() {
    const { theme, children, userData } = this.props;
    const { inputMessage } = this.state;
    let CustomItems;

    if (children) {
      CustomItems = Array.isArray(children)
        ? children.map(child => React.cloneElement(child, { ...this.props }))
        : React.cloneElement(children, { ...this.props });
    }
    return (
      <div className={theme.provider}>
        {children ? (
          <CustomItems />
        ) : (
          <div>
            <this.props.customHeader userData={userData} {...this.props} />
            <this.props.customChatWindow userData={userData} {...this.props} />
            <this.props.customInput
              onSend={this.onSend}
              inputValue={inputMessage}
              {...this.props}
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
  theme: PropTypes.oneOfType([PropTypes.object]).isRequired,
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
