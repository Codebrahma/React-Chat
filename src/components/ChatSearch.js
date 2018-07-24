import React from 'react'
import PropTypes from 'prop-types'
import RenderChatSearch from './RenderChatSearch'

const ChatSearch = (props) => (
    <div>
      <props.customSearch handleSearchChange={props.handleSearchChange}/>
    </div>
  )

ChatSearch.propTypes = {
  customSearch: PropTypes.func.isRequired,
}
ChatSearch.defaultProps = {
  customSearch: RenderChatSearch,
}

export default ChatSearch
