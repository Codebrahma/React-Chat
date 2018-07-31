import React from 'react'
import PropTypes from 'prop-types'
import { themr } from 'react-css-themr';
import defaultTheme from '../themes/_default_theme.scss'

const ChatListHeader = (props) => {
  const { theme } = props;
  return (
    <div className={theme.header}>
      <span>Active Users ({props.userData.filter(data => data.onlineStatus === "online").length})</span>
    </div>
  )
}

ChatListHeader.propTypes = {
  userData: PropTypes.array.isRequired,
  chatHeaderClass: PropTypes.string,
}

ChatListHeader.defaultProps = {
  userData: [],
  chatHeaderClass: "chat-list-header",
}

export default themr('ThemedChatListHeader', defaultTheme, { composeTheme : "softly" })(ChatListHeader)
