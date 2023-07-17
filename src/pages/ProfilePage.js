import { useState, useEffect } from "react";
import api from "../api/api";
import styles from "../components/styles/home.module.scss";
import RoundedImage from "../components/HomeImage";

function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const user = await api.getProfile();
      setProfile(user);
    };
    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profileImage", file);
    try {
      await api.updateAvatar(formData);
      const user = await api.getProfile();
      setProfile(user);
    } catch (error) {
      console.log("ERRO!", error);
    }
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="card">
      {!profile && <div>Loading...</div>}

      {profile && (
        <>
          <div className={styles.center}>
            <div>
              <h2>Nome: {profile.name}</h2>
            </div>
            <div>
              <h3>Telefone: {profile.telephone}</h3>
            </div>
            <div>
              <h3>E-mail: {profile.email}</h3>
            </div>
            <div className={styles.center}>
              <RoundedImage src={profile.avatarUrl} width="px75" />
            </div>
          </div>

          <div>
            <h4>Perfil: {profile.role}</h4>
          </div>
          <button onClick={toggleForm} className={styles.button}>
            {" "}
            {isFormOpen ? "Cancelar" : "Mudar foto Perfil"}
          </button>

          {isFormOpen && (
            <form onSubmit={handleSubmit}>
              <input
                type="file"
                onChange={handleFile}
                className={styles.buttonAvatar}
              />
              <button type="submit" className={styles.button}>
                Salvar
              </button>
            </form>
          )}
        </>
      )}
    </div>
  );
}

export default ProfilePage;
