import Chat from "../../components/Chat/Chat";
import { useFecthDocument } from "../../hooks/useFecthDocument";

import "./ChatScreen.sass";
import { Link, useParams } from "react-router-dom";
import { useAuthValue } from "../../contexts/useAuth";

const ChatScreen = () => {
  const { documents: users } = useFecthDocument("users");

  const {uid} = useParams()

  const { user:thisUser } = useAuthValue();


  return (
    <div className="chat-screen">
      <div className="chats">
        <ul>
          {users &&
            users.filter((user)=>user.uid != thisUser.uid).map((user, i) => (
              <li key={i}>
                <Link to={`/chat/${user.uid}`}>{user.name}</Link>
              </li>
            ))}
        </ul>
      </div>
      <Chat uid={uid}/>
    </div>
  );
};

export default ChatScreen;
