import React from 'react'
import PropTypes from 'prop-types'
import defaultTheme from '../themes/_default_theme.scss'
import { themr } from 'react-css-themr';

const ChatListItem = (props) => {
  const {lastSeen} = props
  const lastSeenTime = new Date() - lastSeen
  const lastSeenMinutes = Math.ceil(lastSeenTime / (1000*60))
  const lastSeenHours = Math.floor(lastSeenMinutes / 60)
  const lastSeenDays = Math.floor(lastSeenHours / 24)
  const { theme } = props;
  return (
    <div id={props.id} className={theme.useritem} onClick={() => props.handleChatItemClick(props.id)}>
      <img src={props.avatar} className={theme.useravatar} alt={props.name.slice(0,1).toUpperCase()}/>
      <span className={theme.username}>{props.name}</span>
      <span className={theme[props.onlineStatus]}>
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
  handleChatItemClick: PropTypes.func.isRequired
}

export default themr('ThemedChatListItem', defaultTheme, { composeTheme : "softly" })(ChatListItem)
