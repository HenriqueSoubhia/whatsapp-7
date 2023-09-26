import React from "react";
import './Chat.sass'

const Chat = () => {
  return (
    <div className="chat-container">
      <ul className="chat">
        <li className="chat-box other-chat">
          <p>Bom dia!</p>
        </li>
        <li className="chat-box you-chat">
          <p>Eae mano!</p>
        </li>
      </ul>
    </div>
  );
};

export default Chat;
