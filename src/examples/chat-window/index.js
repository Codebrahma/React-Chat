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
  componentDidMount() {
    console.log(this.props.userId,'on mount')
    this.setState({
      currentUserId: this.props.userId,
    })
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.userId,'on receive updated')
    this.setState({
      currentUserId: nextProps.userId,
    })
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
        userData={this.props.userData.find((user) => user.id === this.props.userId)}
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
