import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChatWindowHeader from './ChatWindowHeader'
import ChatWindowBody from './ChatWindowBody'
import ChatWindowSend from './ChatWindowSend'
import {
  ChatListProvider,
} from '../../components/index'

class WindowIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputMessage: '',
    }
  }

  render() {
    return (
      <ChatListProvider
        // myData={this.props.myData}
        // userData={this.props.userData}
        // handleInputMessage={this.handleInputMessage}
        onSend={this.onSend}
        inputValue={this.state.inputMessage}
        // messages={this.props.messages}
        {...this.props}
      >
        <ChatWindowHeader {...this.props} />
        <ChatWindowBody />
        <ChatWindowSend />
      </ChatListProvider>
    )
  }
}

WindowIndex.propTypes = {
  userData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
}

export default WindowIndex
