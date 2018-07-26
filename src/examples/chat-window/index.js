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

  handleInputMessage = (e) => {
    this.setState({
      inputMessage: e.target.value,
    })
    // console.log(this.state.inputMessage)
  }

  onSend = (e) => {
    console.log(this.state.inputMessage)
    this.setState({
      inputMessage:''
    })
    e.preventDefault()
  }

  render() {
    return (
      <ChatListProvider
        userData={this.props.userData}
        chatProviderClass="chat-window-container"
        handleInputMessage={this.handleInputMessage}
        onSend={this.onSend}
        inputValue={this.state.inputMessage}
        >
        <ChatWindowHeader />
        <ChatWindowBody />
        <ChatWindowSend  />
      </ChatListProvider>
    )
  }
}

WindowIndex.propTypes = {
  userData: PropTypes.array.isRequired,
}

export default WindowIndex
