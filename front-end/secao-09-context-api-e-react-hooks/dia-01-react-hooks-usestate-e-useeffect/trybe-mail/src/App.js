import './styles/App.css';
import React, { useState } from 'react';
import { READ, UNREAD } from './constants';
import Header from './components/Header';
import MailDisplay from './components/MailDisplay';
import messagesList from './data/messageList';
import ControlAllMessages from './components/ControlAllMessages';

function App() {
  
  const [messages, setMessages] = useState(messagesList);

  const setMessageStatus = (id, newStatus) => {
    const newMessages = messages.map((message) => {
      if (message.id === id) {
        return { ...message, status: newStatus };
      }
      return message;
    });
    setMessages(newMessages);
  }

  const allMessagesRead = () => {
    const allRead = messages.map((message) => ({ ...message, status: READ }))
    setMessages(allRead);
  }

  const allMessagesUnread = () => {
    const allUnread = messages.map((message) => ({ ...message, status: UNREAD }))
    setMessages(allUnread);
  };

  return (
    <div className="App">
      <Header />
      <ControlAllMessages
      allMessagesRead={ allMessagesRead }
      allMessagesUnread={ allMessagesUnread } 
      />
      <MailDisplay
       messages={messages}
       setMessageStatus={ setMessageStatus }
       allMessagesRead={ allMessagesRead }
       allMessagesUnread={ allMessagesUnread }
      />
    </div>
  );
}

export default App;
