import React from 'react'
import PropTypes from 'prop-types'

const ChatListItem = (props) => (
  <div id={props.id} className="chat-item">
    <img src={props.avatar} className="user-avatar" alt={props.name.slice(0,1).toUpperCase()}/>
    <p className="user-name">{props.name}</p>
    <span className={props.status=== "active" ? "active" : "inactive"}></span>
  </div>
)

ChatListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
}

export default ChatListItem
