import { useRef, useState } from "react";
import "./Chat.sass";

import { useInsertDocument } from "../../hooks/useInsertDocument";

import { useAuthValue } from "../../contexts/useAuth";

import { useFecthDocument } from "../../hooks/useFecthDocument";

const Chat = ({ chatUser }) => {
  const [messageText, setMessageText] = useState("");

  const { insertDocument } = useInsertDocument("messages");

  const { documents: messages } = useFecthDocument("messages");

  const { user } = useAuthValue();

  const chatRef = useRef();

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (!messageText) return;

    const messageObj = {
      toId: chatUser.uid,
      fromId: user.uid,
      text: messageText,
    };

    insertDocument(messageObj);

    chatRef.current.scrollTop = chatRef.current.scrollHeight;

    setMessageText("");
  };

  return (
    <div className="chat-container">
      {chatUser && (
        <>
          <h4>{chatUser.name}</h4>
          <ul className="chat" ref={chatRef}>
            {messages &&
              messages
                .filter((message) => {
                  return (
                    (message.fromId === user.uid &&
                      message.toId === chatUser.uid) ||
                    (message.fromId === chatUser.uid &&
                      message.toId === user.uid)
                  );
                })

                .map((message, i) => (
                  <li
                    key={i}
                    className={
                      message.fromId === user.uid
                        ? "chat-box you-chat"
                        : "chat-box other-chat"
                    }
                  >
                    <p>{message.text}</p>
                  </li>
                ))}
          </ul>
          <div className="form-container">
            <form onSubmit={handlerSubmit}>
              <input
                type="text"
                value={messageText}
                onChange={(e) => {
                  setMessageText(e.target.value);
                }}
                placeholder="Sua mensagem"
              />
              <button>Enviar</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Chat;
