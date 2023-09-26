import { useEffect, useState } from "react";
import Chat from "../../components/Chat/Chat";
import { db } from "../../firebase/config";
import { getAuth } from "firebase/auth";
import { collection, onSnapshot, query } from "firebase/firestore";


const ChatScreen = () => {

  //tem que listar os ususarios, boa sorte futuro popa

  const auth = getAuth()

  const [users,setUsers] = useState([])

  useEffect(()=>{
    const q = query(collection(db,"users"))
    const unsubscribe = onSnapshot  (q, (querySnapshot) => {
      let usersArr = [];
      querySnapshot.forEach((doc) => {
        usersArr.push({ ...doc.data(), id: doc.id });
      });
      setUsers(usersArr);
    });
    return () => unsubscribe();
  },[])


  return (
    <div className="chat-screen">
      <div className="chats">
        <ul>
          {users&&users.map((user,i)=>(
            <li key={i}>{user.name}</li>
          ))}
        </ul>
      </div>
      <Chat />
    </div>
  );
};

export default ChatScreen;
