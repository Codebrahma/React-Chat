import React from 'react';
import styles from './demopageStyle.scss';
import DemoPageNavbar from './DemoPageNavbar';
import DemoChatButton from './DemoChatButton';
import DemoChatListBox from './DemoChatListBox';


const DemoPage = () => {
    return (
        // Main container for demo page.
        <div className="demo-home">
            <DemoPageNavbar />
            <DemoChatListBox  />
        </div>
    )
}

export default DemoPage;