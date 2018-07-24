import React from 'react'
import PropTypes from 'prop-types'

const ChatListItem = (props) => {
  const {lastSeen} = props
  const lastSeenTime = new Date() - lastSeen
  const lastSeenMinutes = Math.ceil(lastSeenTime / (1000*60))
  const lastSeenHours = Math.floor(lastSeenMinutes / 60)
  const lastSeenDays = Math.floor(lastSeenHours / 24)
  return (
    <div id={props.id} className="chat-item">
      <img src={props.avatar} className="user-avatar" alt={props.name.slice(0,1).toUpperCase()}/>
      <span className="user-name">{props.name}</span>
      <span className={props.onlineStatus}>
        { props.onlineStatus === "offline" && (
            lastSeenDays > 0
              ? `${lastSeenDays}d`
              : lastSeenHours > 0
                  ? `${lastSeenHours}h`
                  : lastSeenMinutes > 0
                      ? `${lastSeenMinutes}m`
                      : ''
          )
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
