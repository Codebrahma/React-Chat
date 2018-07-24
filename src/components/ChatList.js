import React from 'react'
import PropTypes from 'prop-types'
import RenderChatList from './RenderChatList'

const ChatList = (props) => (
  <div>
    <props.customList userData={props.userData}/>
  </div>
)

ChatList.propTypes = {
  customList: PropTypes.func.isRequired,
}
ChatList.defaultProps = {
  customList: RenderChatList,
}

export default ChatList
