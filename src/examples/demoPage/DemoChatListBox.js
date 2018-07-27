import React, { Component } from 'react';
import DemoChatButton from './DemoChatButton';
import { ChatListProvider, ChatListHeader, ChatList } from '../../components';

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
                    <div className="demo-chat-list">
                        <ChatListProvider
                          userData={this.props.userData}
                          handleChatItemClick={(id) => this.props.updateChatWindow(id)}
                        />
                    </div>
                }
                <DemoChatButton handleChatListProvider={this.handleChatProvider} />
            </div>
        );
    }
}

export default DemoChatList;
