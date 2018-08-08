import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChatWindowSend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }


  onSend = (e) => {
    const { message } = this.state;
    const { myData, handleMessages } = this.props;
    e.preventDefault();
    if (message.trim() !== '') {
      handleMessages({ message, userId: myData.id });
    }
    this.setState(() => ({
      message: '',
    }));
  }

  handleInputMessage = (e) => {
    this.setState({
      message: e.target.value,
    });
  }

  render() {
    const { chatSendClass } = this.props;
    const { message } = this.state;
    return (
      <div className={chatSendClass}>
        <form onSubmit={this.onSend}>
          <input
            className={`${chatSendClass}-input`}
            type="text"
            placeholder="Your message..."
            onChange={this.handleInputMessage}
            value={message}
          />
          <button type="submit">
            <i className="fas fa-arrow-alt-circle-right" />
          </button>
        </form>
      </div>
    );
  }
}

ChatWindowSend.propTypes = {
  chatSendClass: PropTypes.string,
  handleMessages: PropTypes.func.isRequired,
  myData: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

ChatWindowSend.defaultProps = {
  chatSendClass: 'chat-window-send',
};

export default ChatWindowSend;
