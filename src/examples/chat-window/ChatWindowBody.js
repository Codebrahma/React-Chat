import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ChatWindowBody extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={this.props.chatBodyClass}>
        Messsages come here
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
