import React from 'react'
import PropTypes from 'prop-types'

const RenderChatHeader = ({userData}) => (
  <div className="active-users">
    <span>Active Users ({userData.filter(data => data.onlineStatus==="online").length})</span>
  </div>
)

RenderChatHeader.propTypes = {
  userData: PropTypes.array.isRequired,
}

RenderChatHeader.defaultProps = {
  userData: [],
}

export default RenderChatHeader
