import { NavLink } from "react-router-dom";

import "./Navbar.sass";
import { useAuthValue } from "../../contexts/useAuth";
import { useAuthentication } from "../../hooks/useAuthentication";

const Navbar = () => {

  const { user } = useAuthValue();
  const {logout} = useAuthentication()

  return (
    <nav className="navbar">
      <h4>Whatsapp 7</h4>

      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {!user && (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Registar</NavLink>
            </li>
          </>
        )}
        {user && (
          <>
          <li>
            <NavLink to="/chat">Chatzada</NavLink>
          </li>
          <li>
            <button onClick={logout}>Sair</button>
          </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
