import React from 'react'
import PropTypes from 'prop-types'
import { themr } from 'react-css-themr';
import defaultTheme from '../themes/_default_theme.scss'

const ChatListSearch = (props) => {
  const { theme } = props;
  return (
  <div className={theme.searchbox}>
    <input
      className={theme.input}
      type="text"
      placeholder="Search users..."
      onChange={(e)=>{props.handleSearchChange(e.target.value)}}
    />
  </div>
  )
}

ChatListSearch.propTypes = {
  handleSearchChange: PropTypes.func,
  chatSearchClass: PropTypes.string,
}

ChatListSearch.defaultProps = {
  chatSearchClass: "search-user",
}

export default themr('ThemedChatSearch', defaultTheme, { composeTheme: "softly" })(ChatListSearch)
