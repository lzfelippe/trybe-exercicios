import React from 'react'
import '../styles/MailDisplay.css';
import { UNREAD, READ } from '../constants';
import { HiOutlineMailOpen, HiOutlineMail } from 'react-icons/hi';

function mailDisplay({ messages, setMessageStatus }) {
  return (
    <main>
          <section>
          <div className="messageList">
            {
              messages.map((message) => {
                const messageClass= message.status === UNREAD
                ? 'message-unread' 
                : 'message-read';

                return (
                  <div className="message" key={ message.id }>
                  <p className={ `message-title ${messageClass}` } >{ message.title }</p>
                  <div>
                  <button
                  type="button"
                  onClick={ () => setMessageStatus(message.id, READ) }
                  >
                    <HiOutlineMailOpen/>
                  </button>
                  <button
                  type="button"
                  onClick={() => setMessageStatus(message.id, UNREAD)}>
                    <HiOutlineMail/>
                  </button>
                  </div>
                </div>
                );
              })
              }
          </div> 
          </section>
      </main>
  )
}

export default mailDisplay;