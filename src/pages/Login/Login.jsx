import { useState } from "react";
import "./Login.sass";
import { useAuthentication } from "../../hooks/useAuthentication";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {login,error} = useAuthentication()

  const handlerSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    login(user)

    setEmail("")
    setPassword("")
  };

  return (
    <div className="login">
      <h2>Entrar</h2>
      <form onSubmit={handlerSubmit}>
    
        <label>
          <span>Email:</span>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
            required
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type="password"
            required
          />
        </label>
        
        <button>Entrar</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Login;
