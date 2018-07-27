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
  }

  onSend = (e) => {
    this.state.inputMessage.trim() !== ''
      ? this.props.handleMessages({ message: this.state.inputMessage, userId: this.props.myData.id })
      : null
    this.setState(() => ({
      inputMessage: '',
    }))
    e.preventDefault()
  }

  render() {
    return (
      <ChatListProvider
        myData={this.props.myData}
        userData={this.props.userData}
        chatProviderClass="chat-window-container animated fadeInUp"
        handleInputMessage={this.handleInputMessage}
        onSend={this.onSend}
        inputValue={this.state.inputMessage}
        messages={this.props.messages}
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
