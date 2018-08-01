import React from 'react'
import PropTypes from 'prop-types'

const ChatWindowSend = (props) => (
  <div className={props.chatSendClass}>
    <form onSubmit={props.onSend}>
      <input
        className={`${props.chatSendClass}-input`}
        type="text"
        placeholder="Your message..."
        onChange={props.handleInputMessage}
        value={props.inputValue}
      />
      <button type="submit">
        <i className="fas fa-arrow-alt-circle-right" />
      </button>
    </form>
  </div>
)

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
