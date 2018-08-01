import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChatWindowBody extends Component {
  
  componentDidUpdate(nextProps) {
    const lastMessageIndex = nextProps.messages.length;
       const messageContainer = document.getElementById(`window-${this.props.myData.id}`)
       const lastMessageElement=document.getElementById(`m-${this.props.myData.id}-${lastMessageIndex}`)
       
       if(lastMessageElement!==null) {
         let lastMessageTop = lastMessageElement.offsetTop;
         messageContainer.scrollTop = lastMessageTop-40;
       }
  }

  render() {
    return (
      <div className={this.props.chatBodyClass} id={`window-${this.props.myData.id}`}>
        {
          this.props.messages.map((message,index) => (
              <div key={index} id={`m-${this.props.myData.id}-${index+1}`} className={`${this.props.myData.id === message.userId ? "sent" : "received"} message animated zoomIn`}>
                {message.message}
              </div>
            )
          )
        }
      </div>
    )
  }
}

ChatWindowBody.propTypes = {
  chatBodyClass: PropTypes.string,
}

ChatWindowBody.defaultProps = {
  chatBodyClass: "chat-window-body",
}

export default ChatWindowBody
