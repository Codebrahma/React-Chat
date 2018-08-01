import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChatListHeader from './ChatListHeader'
import ChatList from './ChatList'
import ChatListSearch from './ChatListSearch'
import { themr } from 'react-css-themr';
import defaultTheme from '../themes/_default_theme.scss'

class ChatListProvider extends Component {
  constructor(props) {
    super(props)
    this.state={
      searchedFor: ''
    }
  }
  defaultSearchChange = (value) => {
    this.setState({
        searchedFor: value,
    })
}
  render() {
    const { theme } = this.props;
    return (
      <div className={theme.provider}>
        {
          this.props.children
            ? ( Array.isArray(this.props.children)
                  ?  this.props.children.map((child, index) => React.cloneElement(child, {...this.props, key: index}))
                  :  React.cloneElement(this.props.children, {...this.props})
              )
            : (
                <div>
                  <this.props.customHeader userData={this.props.userData} {...this.props}/>
                  <this.props.customList userData={this.props.userData} searchedFor={this.state.searchedFor} {...this.props}/>
                  <this.props.customSearch handleSearchChange={this.props.handleSearchChange || this.defaultSearchChange}  />
                </div>
              )
        }
      </div>
    )
  }
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
