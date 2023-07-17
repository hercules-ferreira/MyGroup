import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import api from "../api/api";
import styles from "../components/styles/home.module.scss";
import logoImg from "../components/img/logo-m.png";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { authToken } = await api.login({ username, password });
      storeToken(authToken);
      authenticateUser();
      navigate("/mygroup");
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <>
         <div class="logos">
        <div class="logos-slide">
          <img src="/carousel/container1.jpg" alt="our gallery" />

          <img src="/carousel/container2.jpg" alt="our gallery" />

          <img src="/carousel/container3.jpg" alt="our gallery" />

          <img src="/carousel/container4.jpg" alt="our gallery" />
          <img src="/carousel/heart.jpg" alt="our gallery" />

          <img src="/carousel/logo_pessoal-sem-fundo.png" alt="our gallery" />

          <img src="/carousel/container7.jpg" alt="our gallery" />
          <img src="/carousel/container8.jpg" alt="our gallery" />
        </div>

        <div class="logos-slide">
          <img src="/carousel/container1.jpg" alt="our gallery" />

          <img src="/carousel/container2.jpg" alt="our gallery" />

          <img src="/carousel/container3.jpg" alt="our gallery" />

          <img src="/carousel/container4.jpg" alt="our gallery" />
          <img src="/carousel/heart.jpg" alt="our gallery" />

          <img src="/carousel/logo_pessoal-sem-fundo.png" alt="our gallery" />

          <img src="/carousel/container7.jpg" alt="our gallery" />
          <img src="/carousel/container8.jpg" alt="our gallery" />
        </div>
      </div>
      <div className={styles.containerLogin}>
        <div>
          <div className="LoginPage">
            <div className={styles.logo}>
              <img src={logoImg} alt="Logo" maxWidth={50} height={40} />
            </div>

            <div className={styles.color}>
              <h1>Faça seu Login!</h1>

              <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={handleUsername}
                  placeholder="Digite seu username"
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
                  Login!
                </button>
              </form>

              {errorMessage && <p className="error-message">{errorMessage}</p>}

              <p>Don't have an account?</p>
              <Link to="/signup">Signup</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
