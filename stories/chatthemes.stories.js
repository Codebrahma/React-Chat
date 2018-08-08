import React from 'react';
import { storiesOf } from '@storybook/react';
import { userData } from '../src/data';
import { ChatListProvider } from '../src/components';

import themeTwo from '../src/themes/_theme_two.scss';
import themeThree from '../src/themes/_theme_three.scss';

const ExampleThemeone = () => (
  <div>
    <div className="chat-provider-demo">
      <ChatListProvider userData={userData} />
    </div>
    <hr className="separator" />
    <div className="demo-info-container">
      <p>
Example Design implemented using default Chat Components.
      </p>
      <p>
View implementation on
        <a href="https://github.com/Codebrahma/React-Chat/tree/master/src/examples/exampleChat1">
Github
        </a>
      </p>
    </div>
  </div>
);

const ExampleThemetwo = () => (
  <div>
    <div className="chat-provider-demo">
      <ChatListProvider userData={userData} theme={themeTwo} />
    </div>
    <hr className="separator" />
    <div className="demo-info-container">
      <p>
Example Design implemented using default Chat Components.
      </p>
      <p>
View implementation on
        <a href="https://github.com/Codebrahma/React-Chat/tree/master/src/examples/exampleChat2">
Github
        </a>
      </p>
    </div>
  </div>
);

const ExampleThemethree = () => (
  <div>
    <div className="chat-provider-demo">
      <ChatListProvider userData={userData} theme={themeThree} />
    </div>
    <hr className="separator" />
    <div className="demo-info-container">
      <p>
Example Design implemented using default Chat Components.
      </p>
      <p>
View implementation on
        <a href="https://github.com/Codebrahma/React-Chat/tree/master/src/examples/exampleChat3">
Github
        </a>
      </p>
    </div>
  </div>
);

storiesOf('Design', module)
  .add('Design 1', () => <ExampleThemeone />)
  .add('Design 2', () => <ExampleThemetwo />)
  .add('Design 3', () => <ExampleThemethree />);
