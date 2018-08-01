import React from 'react'
import PropTypes from 'prop-types'
import ChatListHeader from './ChatListHeader'
import ChatList from './ChatList'
import ChatListSearch from './ChatListSearch'
import { themr } from 'react-css-themr';
import defaultTheme from '../themes/_default_theme.scss'

const ChatListProvider = (props) => {
  const { theme } = props;
  return (
    <div className={theme.provider}>
      {
        props.children
          ? ( Array.isArray(props.children)
                ?  props.children.map((child, index) => React.cloneElement(child, {...props, key: index}))
                :  React.cloneElement(props.children, {...props})
            )
          : (
              <div>
                <props.customHeader userData={props.userData} {...props}/>
                <props.customList userData={props.userData} {...props}/>
                <props.customSearch handleSearchChange={props.handleSearchChange} />
              </div>
            )
      }
    </div>
  )
}

ChatListProvider.propTypes = {
  customHeader: PropTypes.func,
  customList: PropTypes.func,
  customSearch: PropTypes.func,
  userData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  handleSearchChange: PropTypes.func,
  chatProviderClass: PropTypes.string,
}

ChatListProvider.defaultProps = {
  customHeader: ChatListHeader,
  customList: ChatList,
  customSearch: ChatListSearch,
}

export default themr('ThemedChatListProvider',defaultTheme, { composeTheme : "softly" })(ChatListProvider)
