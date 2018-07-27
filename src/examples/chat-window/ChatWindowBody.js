import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ChatWindowBody extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={this.props.chatBodyClass}>
        {
          this.props.messages.map((message,index) => (
              <div key={index} className={`${this.props.myData.id === message.userId ? "sent" : "received"} message`}>
                {message.message}
              </div>
            )
          )
        }
      </div>
    )
  }
}

ChatWindowBody.propTypes = {
  chatBodyClass: PropTypes.string,
}

ChatWindowBody.defaultProps = {
  chatBodyClass: "chat-window-body",
}

export default ChatWindowBody
