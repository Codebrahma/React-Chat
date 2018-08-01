import React, { Component } from 'react';
import styles from './demopageStyle.scss';
import DemoPageNavbar from './DemoPageNavbar';
import DemoChatListBox from './DemoChatListBox';
import DemoChatWindowBox from './DemoChatWindowBox';
import './resources/animate.scss';


class DemoPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chatUserId: '',
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
                <div className="demo-page-intro">
                    <div className="demo-intro animated fadeInUp">
                        <h2>A reusable React Chat App module.</h2>
                        <p>Click on the chat icon at the bottom right of the page and select any user to start a demo chat!</p>
                    </div>
                </div>
                <DemoChatListBox updateChatWindow={this.updateWindow}  userData={this.props.userData}  />
                {
                    this.state.chatUserId  &&
                    <DemoChatWindowBox userId={this.state.chatUserId}  {...this.props} />
                }
            </div>
        )
    }
}

export default DemoPage;
