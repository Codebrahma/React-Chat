import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import './styles.scss';

storiesOf('Writing your own themes', module)
    .add('Boilerplate for theme',
            withInfo({
            inline: true,    
            header: false,
            source: false,
            text : `
            ~~~
            
            :local(.provider) {
                // Your custom styling for chat provider goes here.
            }

            :local(.userlist) {
                // Your custom styling for chat list goes here.
            }

            :local(.header) {
                // Your custom styling for header goes here.
            }

            :local(.useritem) {
                // Your custom styling for chat list item goes here.
            }

            :local(.useravatar) {
                // Your custom styling for user avatar goes here.
            }

            :local(.username) {
                // Your custom styling for displaying user name goes here.
            }

            :local(.online) {
                // Your custom styling for online status
            }

            :local(.offline) {
                // Your custom styling for last seen on chat list.
            }

            :local(.searchbox) {
                // Your custom styling for search box container goes here.
            }

            :local(.input) {
                // Your custom styling for search input goes here.
}
            ~~~
        `})(() => {
                return (<div className="demo-info-container">
                            <p>You can create your own themes by following the boilerplate instructions.</p>
                        </div>)
                }))