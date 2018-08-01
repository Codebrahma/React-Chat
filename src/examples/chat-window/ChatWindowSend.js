import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChatWindowSend extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }
  }


  handleInputMessage = (e) => {
    this.setState({
      message: e.target.value,
    })
  }

  onSend = (e) => {
    e.preventDefault();
    this.state.message.trim() !== ''
      ? this.props.handleMessages({ message: this.state.message, userId: this.props.myData.id })
      : null
    this.setState(() => ({
      message: '',
    }))
  }

  render() {
    return (
      <div className={this.props.chatSendClass}>
        <form onSubmit={this.onSend}>
          <input
            className={`${this.props.chatSendClass}-input`}
            type="text"
            placeholder="Your message..."
            onChange={this.handleInputMessage}
            value={this.state.message}
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
  handleInputMessage: PropTypes.func,
  onKeyUp: PropTypes.func,
  inputValue: PropTypes.string,
}

ChatWindowSend.defaultProps = {
  chatSendClass: "chat-window-send",
}

export default ChatWindowSend
