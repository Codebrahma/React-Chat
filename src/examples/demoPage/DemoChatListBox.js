import React, { Component } from 'react';
import DemoChatButton from './DemoChatButton';
import { ChatListProvider, ChatListHeader, ChatList } from '../../components';
import { userData } from '../../data';
import DemoChatListItem from './DemoChatListItem';

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

    handleItemClick = (id) => {
        console.log(id);
    }

    render() {
        return (
            <div className="demo-chat-list-box">
                {
                    this.state.open &&
                    <div className="demo-chat-list">
                        <ChatListProvider userData={userData} handleChatItemClick={this.handleItemClick}>
                            {/* <ChatListHeader />
                            <ChatList
                                customChatListItem={DemoChatListItem} /> */}
                        </ChatListProvider>
                    </div>
                }
                <DemoChatButton handleChatListProvider={this.handleChatProvider} />
            </div>
        );
    }
}

export default DemoChatList;