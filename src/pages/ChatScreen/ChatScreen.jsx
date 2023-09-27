import Chat from "../../components/Chat/Chat";
import { useFecthDocument } from "../../hooks/useFecthDocument";

import "./ChatScreen.sass";
import { Link, useParams } from "react-router-dom";
import { useAuthValue } from "../../contexts/useAuth";
import { useEffect, useState } from "react";

const ChatScreen = () => {
  const [chatUser, setChatUser] = useState("");

  const { documents: users } = useFecthDocument("users");

  const { uid } = useParams();

  const { user: thisUser } = useAuthValue();

  useEffect(() => {
    if (users) {
      users.map((user) => {
        if (user.uid === uid) setChatUser(user);
      });
    }
  }, [uid]);

  return (
    <div className="chat-screen">
      <div className="chats">
        <ul>
          {users &&
            users
              .filter((user) => user.uid != thisUser.uid)
              .map((user, i) => (
                <li key={i}>
                  <Link to={`/chat/${user.uid}`}>{user.name}</Link>
                </li>
              ))}
        </ul>
      </div>
      <Chat chatUser={chatUser} uid={uid} />
    </div>
  );
};

export default ChatScreen;
