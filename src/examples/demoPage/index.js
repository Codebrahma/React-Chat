import React, { Component } from 'react';
import styles from './demopageStyle.scss';
import DemoPageNavbar from './DemoPageNavbar';
import DemoChatListBox from './DemoChatListBox';
import DemoChatWindowBox from './DemoChatWindowBox';
import './resources/animate.css';


class DemoPage extends Component {

    constructor(props) {
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
                <div className="demo-page-intro">
                    <div className="demo-intro animated fadeInUp">
                        <h2>Lorem ipsum dolor sit amet, dolore magna aliqua.</h2>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <DemoChatListBox updateChatWindow={this.updateWindow} />
                {
                    this.state.chatUserId !== '' &&
                    <DemoChatWindowBox userId={this.state.chatUserId} />
                }
            </div>
        )
    }
}

export default DemoPage;