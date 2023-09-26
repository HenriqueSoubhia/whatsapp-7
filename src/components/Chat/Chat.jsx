import { useState } from "react";
import "./Chat.sass";

import { useInsertDocument } from "../../hooks/useInsertDocument";

import { useAuthValue } from "../../contexts/useAuth";

import { useFecthDocument } from "../../hooks/useFecthDocument";

const Chat = ({ uid }) => {
  const [messageText, setMessageText] = useState("");

  const { insertDocument } = useInsertDocument("messages");

  const { documents: messages } = useFecthDocument("messages");

  const { user } = useAuthValue();

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (!messageText) return;

    const messageObj = {
      toId: uid,
      fromId: user.uid,
      text: messageText,
    };

    insertDocument(messageObj);

    setMessageText("");
  };

  return (
    <div className="chat-container">
      {uid && (
        <>
          <ul className="chat">
            {messages &&
              messages
                .filter((message) => {
                  return (
                    (message.fromId === user.uid && message.toId === uid) ||
                    (message.fromId === uid && message.toId ===  user.uid )
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
          <form onSubmit={handlerSubmit}>
            <input
              type="text"
              value={messageText}
              onChange={(e) => {
                setMessageText(e.target.value);
              }}
            />
            <button>Enviar</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Chat;
