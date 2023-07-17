import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api";
import styles from "../components/styles/home.module.scss";
import logoImg from "../components/img/logo-m.png";

function SignupPage() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [telephone, setTelephone] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleTelephone = (e) => setTelephone(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.signup({ name, telephone, username, email, password });
      navigate("/login");
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className={styles.containerLogin}>
      <div>
        <div className="SignupPage">
          <div className={styles.logo}>
            <img src={logoImg} alt="Logo" maxWidth={60} height={30} />
          </div>
          <div className={styles.color}>
            <h1>Cadastre-se agora!</h1>

            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={handleName}
                placeholder="Digite seu Nome"
                className={styles.input}
              />

              <label htmlFor="telephone">Telefone</label>
              <input
                id="telephone"
                type="number"
                value={telephone}
                onChange={handleTelephone}
                placeholder="Digite seu Telefone"
                className={styles.input}
              />

              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={handleUsername}
                placeholder="Digite seu username"
                className={styles.input}
              />

              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={handleEmail}
                placeholder="Digite seu melhor e-mail"
                className={styles.input}
              />

              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={handlePassword}
                placeholder="Digite sua senha"
                className={styles.input}
              />

              <button type="submit" className={styles.button}>
                {" "}
                Signup!
              </button>
            </form>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <p>Already have an account?</p>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
