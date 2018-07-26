import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'

const ChatWindowHeader = (props) => (
  <div className={props.chatHeaderClass}>
    <img src={props.avatar} alt="X" className="chat-window-avatar"/>
    <span className="chat-user-name">{props.name}</span>
    <Icon iconClass="fa-times" />
  </div>
)

ChatWindowHeader.propTypes = {
  id: PropTypes.PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string,
  chatHeaderClass: PropTypes.string,
}
ChatWindowHeader.defaultProps = {
  avatar: require("../../images/user-1.jpeg"),
  name: "Expecting as Prop",
  chatHeaderClass: "chat-window-header",
}

export default ChatWindowHeader
