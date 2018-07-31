import React, { Component } from 'react';
import DemoChatButton from './DemoChatButton';
import { ChatListProvider } from '../../components';

class DemoChatList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    handleChatProvider = () => {
        this.setState((prevState) => ({
            open: !prevState.open
        }))
    }

    render() {
        return (
            <div>
                {
                    this.state.open &&
                    <div className="demo-chat-list animated slideInRight">
                        <ChatListProvider 
                          userData={this.props.userData}
                          handleChatItemClick={(id) => this.props.updateChatWindow(id)}
                          handleSearchChange={this.props.handleSearchChange}
                        />
                    </div>
                }
                <DemoChatButton iconClass={this.state.open ? "fa-times" : "fa-comment"} handleChatListProvider={this.handleChatProvider} />
            </div>
        );
    }
}

export default DemoChatList;
