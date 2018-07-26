import React, { Component } from 'react';
import styles from './demopageStyle.scss';
import DemoPageNavbar from './DemoPageNavbar';
import DemoChatButton from './DemoChatButton';
import DemoChatListBox from './DemoChatListBox';
import DemoChatWindowBox from './DemoChatWindowBox';


class DemoPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            chatUserId: ''
        }
    }

    // Update user id for chat window.
    updateWindow = (chatUserId) => {
        this.setState({
            chatUserId
        })
    }

    render() {
        return (
            // Main container for demo page.
            <div className="demo-home">
                <DemoPageNavbar />
                <DemoChatListBox updateChatWindow={this.updateWindow}/>
                {
                    this.state.chatUserId !== '' &&
                    <DemoChatWindowBox userId={this.state.chatUserId}/>
                }
            </div>
        )
    }
}

export default DemoPage;