import React from 'react'
import PropTypes from 'prop-types'

const ChatListSearch = (props) => (
  <div className={props.chatSearchClass}>
    <input
      className={`${props.chatSearchClass}-input`}
      type="text"
      placeholder="Search users..."
      onChange={props.handleSearchChange}
    />
  </div>
)

ChatListSearch.propTypes = {
  handleSearchChange: PropTypes.func,
  chatSearchClass: PropTypes.string,
}

ChatListSearch.defaultProps = {
  chatSearchClass: "search-user",
}

export default ChatListSearch
