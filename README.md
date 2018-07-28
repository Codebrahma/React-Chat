React Chat Components
=====================

**React Chat Components** is a library of reusable and customizable components for building chat applications in [React](https://reactjs.org/). 
Use the default components and themes or modify as you like with your own styles.

**Usage:** 

1. You can start using our already built user interface right away by :

```javascript
import React from 'react';
import { ChatListProvider } from './components/'
		
const App = () => {
	return (
	    <ChatListProvider userData={yourUserData}/>
	)
}
    
export default App; 
```

_**Note** : The ```userData``` prop is required for displaying the list. If the prop is not passed, only the header and the search bar are rendered._

2. To use a custom styling, you can pass a ```chatProviderClass``` to the ```ChatListProvider``` component.

```javascript 
import React from 'react';
import { ChatListProvider } from './components/'
		
const App = () => {
	return (
	<ChatListProvider 
		userData={yourUserData} 
		chatProviderClass="custom-chat-provider-class"
	  />
  )
}

export default App;
```

Similarily, you can pass your own styles to other default components.

**Example:**

```javascript
import React from 'react';
import { ChatListProvider, 
         ChatList, 
         ChatListHeader, 
         ChatListSearch 
    } from './components';
    
const App = () => {
  return (
    <ChatListProvider 
      userData = {yourUserData}
      chatProviderClass = "your-custom-chat-provider-class" 
    >
        <ChatListHeader 
          chatHeaderClass = "your-custom-chat-header-class"
        />
        <ChatList 
          chatListClass = "your-custom-chat-list-class"
        />
        <ChatListSearch 
          chatSearchClass = "your-custom-chat-search-class"
        />
    </ChatListProvider>
  )
}

export default App; 
```

3. To use your custom components for the child components, i.e., ```Chat List```,```Chat Header``` and ```Chat Search```, you can pass your custom built components either as children or as props.

```javascript 
import React from 'react';
import { ChatListProvider } from './components/'
		
const App = () => {
	return (
		<ChatListProvider 
			userData = {yourUserData} 
			customHeader = {
			  //your custom Header
			  }
			customList = {
			  //your custom List
			  }
			customsearch = {
			  //your custom Seacrh bar
			  }
		  />
	)
}
    
export default App; 
```

## Components

### ChatListProvider
This is the main component and can be used as the only component to start up and use React Chat Component's default interface.

**Props :** 

| Prop name          | Prop type                     | Description                                                              |
|--------------------|:-----------------------------:|-------------------------------------------------------------------------:|
| userData           | object (required)             | This prop is used for passing user data for rendering the list of users. |
| chatProviderClass  | string (optional)             | This prop can be used for passing custom style for the component.        |
| customHeader       | react component (optional)    | This prop can be used for passing custom header component.               |
| customList         | react component (optional)    | This prop can be used for passing custom list component.                 |
| customSearch       | react component (optional)    | This prop can be used for passing custom search component.               |


### ChatList
This is the component containing the list of all users along with their names, avatars and other details.

**Props :** 

| Prop name            | Prop type                     | Description                                                        |
|----------------------|:-----------------------------:|-------------------------------------------------------------------:|
| chatListClass        | string (optional)             | This prop can be used for passing custom style for the component.  |
| customChatListItem   | react component (optional)    | This prop can be used for passing custom chat list item component. |


### ChatListHeader
This is the header component of the chat list box.

**Props :** 

| Prop name            | Prop type                     | Description                                                       |
|----------------------|:-----------------------------:|------------------------------------------------------------------:|
| chatHeaderClass      | string (optional)             | This prop can be used for passing custom style for the component. |


### ChatListSearch
This is the search bar component of the chat list box.

**Props :** 

| Prop name            | Prop type                     | Description                                                       
|----------------------|:-----------------------------:|-------------------------------------------------------------------:|
| chatSearchClass      | string (optional)             | This prop can be used for passing custom style for the component.  |

### User data object : 

```javascript
{
  id: 0,
  avatar: require(urlToAvatarImage),
  name: "Username",
  onlineStatus: "online",
  lastSeen: // last seen time as a Date() object ,
  previewMessage: "Lorem ipsum dolor sit amet.",
  messages: [
    {
      messageId: 1,
      text: 'message text',
      receivedFrom: {},
    },
  ]
}
```
