import { useState, useEffect } from "react";
import api from "../api/api";
import styles from "../components/styles/home.module.scss";
import RoundedImage from "../components/HomeImage";

function ProfilePage() {
  const [profile, setProfile] = useState(null);

  useEffect((userId) => {
    const fetchProfile = async () => {
      const user = await api.getProfile(userId);
      setProfile(user);
    };
    fetchProfile();
  }, []);

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
        </>
      )}
    </div>
  );
}

export default ProfilePage;
