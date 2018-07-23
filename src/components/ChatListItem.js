import React from 'react'
import PropTypes from 'prop-types'

const ChatListItem = (props) => {
  const {lastSeen} = props
  const lastSeenHours = new Date().getHours() - lastSeen.getHours()
  const lastSeenMinutes = new Date().getMinutes() - lastSeen.getMinutes()
  return (
    <div id={props.id} className="chat-item">
      <img src={props.avatar} className="user-avatar" alt={props.name.slice(0,1).toUpperCase()}/>
      <p className="user-name">{props.name}</p>
      <span className={props.onlineStatus=== "online" ? "online" : "offline"}>
        {
          lastSeenHours !== 0
            ? `${lastSeenHours}h`
            : lastSeenMinutes !== 0
                ? `${lastSeenMinutes}m`
                : ''
        }
      </span>
    </div>
  )
}

ChatListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onlineStatus: PropTypes.string.isRequired,
}

export default ChatListItem
