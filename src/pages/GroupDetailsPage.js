import { useState, useEffect, useCallback } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import api from "../api/api";
import styles from "../components/styles/home.module.scss";
import RoundedImage from "../components/HomeImage";
import { decodeToken, retrieveToken } from "../utils/local-storage.utils";

function GroupDetailsPage() {
  const [likesByUser, setLikesByUser] = useState([]);

  const [buttonDelete, setButtonDelete] = useState(false);
  const [buttonEdit, setButtonEdit] = useState(true);

  const [file, setFile] = useState(null);
  const [profile, setProfile] = useState(null);

  const [user, setUser] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [avatarUrl, setAvatarUrl] = useState(0);
  const [role, setRole] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleTelephone = (e) => setTelephone(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const { userId } = useParams();
  const navigate = useNavigate();

  const fetchUser = useCallback(async () => {
    const userFromDB = await api.getUser(userId);
    setUser(userFromDB);
    setName(userFromDB.name);
    setTelephone(userFromDB.telephone);
    setUsername(userFromDB.username);
    setEmail(userFromDB.email);
    setRole(userFromDB.role);
  }, [userId]);

  const deleteUser = async () => {
    await api.removeUser(userId);
    navigate("/mygroup");
  };

  const toggleIsFormOpen = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.editUser(userId, { name, telephone, avatarUrl, email });
    setIsFormOpen(false);
    fetchUser();

    const formData = new FormData();
    formData.append("profileImage", file);
    try {
      await api.updateAvatar(formData);
      const user = await api.getProfile();
      setProfile(user);
    } catch (error) {
      console.log("ERRO!", error);
    }
    navigate("/mygroup");
  };

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const getLikeById = async (idCreator) => {
    const likes = await api.getLikes();
    setLikesByUser(likes.filter((like) => like.idCreator === idCreator));
  };

  useEffect(() => {
    const token = retrieveToken();
    const payload = decodeToken(token);
    getLikeById(userId);

    if (payload.role === "colaborador") {
      setButtonDelete(true);
    }
    if (payload._id === userId) {
      setButtonEdit(false);
    }
  }, []);

  const renderButtonEdit = () => {
    if (!buttonEdit || (buttonEdit && !buttonDelete)) {
      return (
        <button onClick={toggleIsFormOpen} className={styles.button}>
          {" "}
          {isFormOpen ? "Cancelar" : "Editar"}
        </button>
      );
    }
  };

  return (
    <div className="card">
      <h1>Detalhes de: </h1>
      {user && (
        <>
          <div className={styles.containerUser}>
            {isFormOpen ? (
              <div>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="name" className={styles.labelStyles}>
                    Nome:
                  </label>
                  <textarea
                    id="name"
                    type="text"
                    value={name}
                    onChange={handleName}
                    placeholder="Digite um nome"
                    className={styles.input}
                  />

                  <label htmlFor="telephone" className={styles.labelStyles}>
                    Telefone:
                  </label>
                  <textarea
                    id="telephone"
                    type="number"
                    value={telephone}
                    onChange={handleTelephone}
                    placeholder="Digite um telefone"
                    className={styles.input}
                  />

                  <label htmlFor="email" className={styles.labelStyles}>
                    Email:
                  </label>
                  <input
                    id="email"
                    type="text"
                    value={email}
                    onChange={handleEmail}
                    placeholder="Digite um e-mail"
                    className={styles.input}
                  />

                  <input
                    type="file"
                    onChange={handleFile}
                    className={styles.buttonAvatar}
                  />
                  <button type="submit" className={styles.button}>
                    Salvar
                  </button>

                  <div>
                    <button type="submit" className={styles.button}>
                      Adicionar
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <>
                <h1>{user.name}</h1>
                <div className={styles.center}>
                  <RoundedImage
                    src={user.avatarUrl}
                    alt={user.name}
                    width="px75"
                  />
                </div>
                <div className={styles.divLikes}>
                  {likesByUser.map((like) => (
                    <>
                      <h4 className={styles.iLike}>I like: </h4>
                      <h5 className={styles.iLikeTitle}>
                        Título:
                        <span className={styles.iLikeSubTitle}>
                          {" "}
                          {like.title}{" "}
                        </span>{" "}
                      </h5>
                      <h5 className={styles.iLikeTitle}>
                        Descrição:{" "}
                        <span className={styles.iLikeSubTitle}>
                          {" "}
                          {like.description}{" "}
                        </span>
                      </h5>

                      <h5 className={styles.iLikeRating}>
                        Minha avaliação é:
                        <span className={styles.iLikeSubTitle}>
                          {" "}
                          {like.rating}{" "}
                        </span>
                      </h5>
                    </>
                  ))}
                </div>
              </>
            )}
          </div>
        </>
      )}

      {renderButtonEdit()}

      <Link to="/mygroup">
        <button className={styles.button}>Voltar</button>
      </Link>

      {!buttonDelete && (
        <button onClick={deleteUser} className={styles.button}>
          Remover
        </button>
      )}
    </div>
  );
}

export default GroupDetailsPage;
