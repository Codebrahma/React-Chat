import React, { Component } from 'react';
import DemoChatButton from './DemoChatButton';
import { ChatListProvider, ChatListHeader, ChatList } from '../../components';
import { userData } from '../../data';

class DemoChatList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    handleChatProvider = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.open &&
                    <div className="demo-chat-list">
                        <ChatListProvider userData={userData} handleChatItemClick={(id) => this.props.updateChatWindow(id)}>
                        </ChatListProvider>
                    </div>
                }
                <DemoChatButton handleChatListProvider={this.handleChatProvider} />
            </div>
        );
    }
}

export default DemoChatList;