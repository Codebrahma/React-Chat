import React from 'react'
import PropTypes from 'prop-types'
import  RenderChatHeader  from './RenderChatHeader'

const ChatListHeader = (props) => {
  return (
    <div>
      <props.customHeader  userData={props.userData}/>
    </div>
  )
}


ChatListHeader.propTypes = {
  customHeader: PropTypes.func.isRequired,
}

ChatListHeader.defaultProps = {
  customHeader: RenderChatHeader,
}

export default ChatListHeader
