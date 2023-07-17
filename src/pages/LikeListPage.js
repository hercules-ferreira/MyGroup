import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";
import styles from "../components/styles/home.module.scss";

import AddLike from "../components/AddLike";

function LikeListPage() {
  const [likes, setLikes] = useState(null);
  const [formIsOpen, setFormIsOpen] = useState(false);

  const fetchLikes = async () => {
    const likesFromDB = await api.getLikes();
    setLikes(likesFromDB);
  };

  const toggleFormOpen = () => {
    setFormIsOpen(!formIsOpen);
  };

  useEffect(() => {
    fetchLikes();
  }, []);

  return (
    <div className="likeListPage">
      <button onClick={toggleFormOpen} className={styles.buttonForm}>
        {formIsOpen ? "Fechar Formulário" : "Abrir Formulário"}
      </button>
      {formIsOpen && <AddLike updateLikeList={fetchLikes} />}

      {likes &&
        likes.map((like) => {
          return (
            <div className="LikeCard card" key={like._id}>
              <Link to={`/likes/${like._id}`}>
                <h3>{like.title}</h3>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default LikeListPage;
