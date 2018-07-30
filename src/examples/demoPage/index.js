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
            chatUserId: '',
            searchedFor: '',
        }
    }

    // Update user id for chat window.
    updateWindow = (chatUserId) => {
        this.setState({
            chatUserId
        })
    }

    handleSearchChange = (e) => {
        this.setState({
            searchedFor: e.target.value,
        })
    }

    render() {
        let filteredUserData = this.props.userData.filter((user) => user.name.toLowerCase().includes(this.state.searchedFor.toLowerCase()))
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
                <DemoChatListBox updateChatWindow={this.updateWindow} handleSearchChange={this.handleSearchChange} userData={filteredUserData}  />
                {
                    this.state.chatUserId  &&
                    <DemoChatWindowBox userId={this.state.chatUserId}  {...this.props} />
                }
            </div>
        )
    }
}

export default DemoPage;
