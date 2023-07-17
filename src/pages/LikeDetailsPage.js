import { useState, useEffect, useCallback } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import api from "../api/api";
import styles from "../components/styles/home.module.scss";
import { decodeToken, retrieveToken } from "../utils/local-storage.utils";

function LikeDetailsPage() {
  const [buttonDelete, setButtonDelete] = useState(false);
  const [buttonEdit, setButtonEdit] = useState(true);

  const [like, setLike] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [idCreator, setIdCreator] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);

  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleRating = (e) => setRating(e.target.value);

  const { likeId } = useParams();
  const navigate = useNavigate();

  const fetchLike = useCallback(async () => {
    const likeFromDB = await api.getLike(likeId);
    setLike(likeFromDB);
    setTitle(likeFromDB.title);
    setDescription(likeFromDB.description);
    setRating(likeFromDB.rating);
    setIdCreator(likeFromDB.idCreator);
  }, [likeId]);

  const deleteLike = async () => {
    await api.removeLike(likeId);
    navigate("/likes");
  };

  const toggleIsFormOpen = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.editLike(likeId, { title, description, rating });
    setIsFormOpen(false);
    fetchLike();
  };

  useEffect(() => {
    fetchLike();
  }, [fetchLike]);

  const renderButtonDelete = () => {
    const token = retrieveToken();
    const payload = decodeToken(token);
    if (payload.role === "admin" || payload._id === idCreator) {
      return (
        <button onClick={deleteLike} className={styles.button}>
          Remover
        </button>
      );
    }
  };

  const renderButtonEdit = () => {
    const token = retrieveToken();
    const payload = decodeToken(token);
    if (payload.role === "admin" || payload._id === idCreator) {
      return (
        <button onClick={toggleIsFormOpen} className={styles.button}>
          {" "}
          {isFormOpen ? "Cancelar" : "Editar"}
        </button>
      );
    }
  };

  useEffect(() => {
    const token = retrieveToken();
    const payload = decodeToken(token);

    if (payload.role !== "admin" && payload._id !== idCreator) {
      setButtonDelete(true);
      setButtonEdit(true);
    }
  }, [setIdCreator]);

  return (
    <div className="card">
      {like && (
        <>
          {isFormOpen ? (
            <div className={styles.containerEditLike}>
              <div className={styles.containerEditLikeColor}>
                <div className="AddLike">
                  <form onSubmit={handleSubmit}>
                    <label className={styles.labelStyles} htmlFor="title">
                      Título pagina edição:
                    </label>
                    <input
                      id="title"
                      type="text"
                      value={title}
                      onChange={handleTitle}
                      placeholder="Digite um título"
                      className={styles.input}
                    />

                    <label className={styles.labelStyles} htmlFor="description">
                      Descrição:
                    </label>
                    <textarea
                      id="description"
                      type="text"
                      value={description}
                      onChange={handleDescription}
                      placeholder="Digite uma descrição"
                      className={styles.input}
                    />

                    <label className={styles.labelStyles} htmlFor="rating">
                      Nota:
                    </label>
                    <input
                      id="rating"
                      type="text"
                      value={rating}
                      onChange={handleRating}
                      placeholder="Digite uma nota"
                      className={styles.input}
                    />
                    <div>
                      <button type="submit" className={styles.button}>
                        {" "}
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <>
              <h3>{title}</h3>
              <span>Nota: {rating}</span>
              <p>Descrição: {description}</p>
            </>
          )}
        </>
      )}

      {renderButtonEdit()}

      <Link to="/likes">
        <button className={styles.button}>Voltar</button>
      </Link>
      {renderButtonDelete()}
    </div>
  );
}

export default LikeDetailsPage;
