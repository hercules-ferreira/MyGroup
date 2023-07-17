import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";
import RoundedImage from "../components/HomeImage";
import styles from "../components/styles/home.module.scss";

function MyGroupListPage() {
  const [users, setUsers] = useState(null);

  const fetchUsers = async () => {
    const usersFromDB = await api.getUsers();
    setUsers(usersFromDB);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className={styles.LikeListPage}>
      {users &&
        users.map((user) => {
          return (
            <div className="LikeCard card" key={user._id}>
              <Link to={`/user/${user._id}`}>
                <h3>{user.name}</h3>

                <RoundedImage
                  src={user.avatarUrl}
                  alt={user.name}
                  width="px75"
                />
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default MyGroupListPage;
