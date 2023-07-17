import { useState } from "react";
import api from "../api/api";
import styles from "../components/styles/home.module.scss";
import { decodeToken, retrieveToken } from "../utils/local-storage.utils";

function AddLike({ updateLikeList }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);

  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleRating = (e) => setRating(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const like = {
      title,
      description,
      rating,
    };
    const token = retrieveToken();
    const payload = decodeToken(token);
    
    await api.addLike({...like, idCreator: payload._id});
    resetForm();
    updateLikeList();
   
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setRating(0);
  };


  return (
    <div className="AddLike">
      <form onSubmit={handleSubmit}>
        <div className={styles.containerEditLike}>
          <div className={styles.containerEditLikeColor}>
            <div className="LoginPage">
              <label className={styles.labelStyles} htmlFor="title">
                Título:
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
                className={styles.input}
              />
              <div>
                <button type="submit" className={styles.button}>
                  Adicionar
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddLike;
