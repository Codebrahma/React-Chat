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
    // Custom searchbar functionality can be defined here
    // handleSearchChange =(value) => {
    //     console.log(value)
    // }

    render() {
        // filteredData also need to be passed if using custom search functionality
        return (
            <div>
                {
                    this.state.open &&
                    <div className="demo-chat-list animated slideInRight">
                        <ChatListProvider 
                            userData={this.props.userData}
                            handleChatItemClick={(id) => this.props.updateChatWindow(id)}
                            // handleSearchChange={this.handleSearchChange}
                            
                        />
                    </div>
                }
                <DemoChatButton iconClass={this.state.open ? "fas fa-times" : "far fa-comment"} handleChatListProvider={this.handleChatProvider} />
            </div>
        );
    }
}

export default DemoChatList;
