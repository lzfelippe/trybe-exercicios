import React from 'react'
import '../styles/ControlAllMessages.css';
import { HiOutlineMailOpen, HiOutlineMail } from 'react-icons/hi';

function ControlAllMessages({ allMessagesRead, allMessagesUnread }) {
  return (
    <div className="buttons">
        <ul>
        <button
        type="button"
        onClick={ allMessagesRead }
        >
            <HiOutlineMailOpen/> Marcar todas como lida
        </button>
        <button
        type=""
        onClick={ allMessagesUnread }
        > 
            <HiOutlineMail /> Marcar todas como não lida
        </button>
        </ul>
    </div>
  )
}

export default ControlAllMessages