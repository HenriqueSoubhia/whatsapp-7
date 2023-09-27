import { useState } from "react";
import "./Register.sass";
import { useAuthentication } from "../../hooks/useAuthentication";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { createUser, error } = useAuthentication();

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (password != confirmPassword) {
      alert("senhas diferentes");
      return;
    }

    const user = {
      username,
      email,
      password,
    };

    createUser(user);

    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

  };

  return (
    <div className="register">
      <h2>Registro</h2>
      <form onSubmit={handlerSubmit}>
        <label>
          <span>Nome:</span>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
            type="text"
            required
          />
        </label>
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
        <label>
          <span>Confimar senha:</span>
          <input
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            value={confirmPassword}
            type="password"
            required
          />
        </label>
        <button>Cadastrar</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Register;
