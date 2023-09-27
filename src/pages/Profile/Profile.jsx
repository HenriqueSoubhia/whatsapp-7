import { useEffect, useState } from "react";
import { useAuthValue } from "../../contexts/useAuth";
import { useFecthDocument } from "../../hooks/useFecthDocument";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";

import "./Profile.sass"

const Profile = () => {
  const { user } = useAuthValue();

  const { documents: users } = useFecthDocument("users");

  const [thisUser, setThisuser] = useState("");

  const { updateDocument } = useUpdateDocument("users");

  useEffect(() => {
    if (users) {
      users.map((userY) => {
        if (userY.uid === user.uid) {
          setThisuser(userY);
        }
      });
    }
  }, [users]);

  const handlerSubmit = (e) => {
    e.preventDefault();

    updateDocument(thisUser);
  };

  return (
    <div className="profile">
      <h2>Seu Perfil</h2>
      {thisUser && (
        <form onSubmit={handlerSubmit}>
          <input
            type="text"
            value={thisUser.name}
            onChange={(e) => {
              setThisuser({ ...thisUser, name: e.target.value });
            }}
          />
          <button type="submit">Alterar Nome</button>
        </form>
      )}
    </div>
  );
};

export default Profile;
