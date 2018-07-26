import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'

const ChatWindowHeader = (props) => {
  return (
    <div className={props.chatHeaderClass}>
      <img src={props.userData.avatar} alt={props.userData.name.slice(0,1).toUpperCase()} className="chat-window-avatar"/>
      <span className="chat-user-name">{props.userData.name}</span>
      <Icon iconClass="fa-times" />
    </div>
  )
}

ChatWindowHeader.propTypes = {
  userData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
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
