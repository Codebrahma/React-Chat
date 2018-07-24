import React from 'react'
import PropTypes from 'prop-types'

const RenderChatSearch = (props) => (
  <div className="search-user">
    <input
      className="search-user-input"
      type="text"
      placeholder="Search users..."
      onChange={props.handleSearchChange}
    />
  </div>
)

RenderChatSearch.propTypes = {
  // userData: PropTypes.array.isRequired,
}

RenderChatSearch.defaultProps = {
  // userData: [],
}

export default RenderChatSearch
