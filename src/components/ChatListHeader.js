import React from 'react'
import PropTypes from 'prop-types'

const ChatListHeader = (props) => (
  <div className={props.chatHeaderClass}>
    <span>Active Users ({props.userData.filter(data => data.onlineStatus==="online").length})</span>
  </div>
)

ChatListHeader.propTypes = {
  userData: PropTypes.array.isRequired,
  chatHeaderClass: PropTypes.string,
}

ChatListHeader.defaultProps = {
  userData: [],
  chatHeaderClass: "chat-list-header",
}

export default ChatListHeader
