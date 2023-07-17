import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import styles from "./styles/home.module.scss";
import logoImg from "./img/logo-m.png";

function Navbar() {
  const { isLoggedIn, user, logoutUser } = useContext(AuthContext);

  return (
    <header className={styles.headerNav}>
      <div className={styles.headerLogin}>
        <NavLink to="/login">
          <img
            src={logoImg}
            alt="Logo"
            maxWidth={80}
            height={60}
            className={styles.img}
          />
        </NavLink>

        <div className={styles.buttonNav}>
          {isLoggedIn ? (
            <>
              <div className={styles.navUser}>
                <span>
                  Usuário: <strong>{user && user.username}</strong>
                </span>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        <nav className={styles.nav}>
          {isLoggedIn ? (
            <>
              <NavLink to="/likes">
                <button className={styles.button}> I Like</button>
              </NavLink>
              <NavLink to="/profile">
                <button className={styles.button}>Perfil</button>
              </NavLink>

              <NavLink to="/mygroup">
                <button className={styles.button}>Meu Grupo</button>
              </NavLink>

              <button onClick={logoutUser} className={styles.buttonLogout}>
                Logout
              </button>
            </>
          ) : (
            <></>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
