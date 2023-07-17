import axios from "axios";
import { retrieveToken } from "../utils/local-storage.utils";

class Api {
  constructor(baseURL) {
    this.api = axios.create({
      baseURL,
    });

    this.api.interceptors.request.use((req) => {
      const token = retrieveToken();

      if (token) {
        req.headers.Authorization = `Bearer ${token}`;
      }

      return req;
    });
  }

  signup = async ({ name, telephone, username, email, password }) => {
    try {
      const { data } = await this.api.post("/auth/signup", {
        name,
        telephone,
        username,
        email,
        password,
      });
      return data;
    } catch (error) {
      throw error;
    }
  };

  login = async ({ username, password }) => {
    try {
      const { data } = await this.api.post("/auth/login", {
        username,
        password,
      });
      return data;
    } catch (error) {
      throw error;
    }
  };

  getUser = async (userId) => {
    try {
      const { data } = await this.api.get(`/user/${userId}`);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  getUsers = async () => {
    try {
      const { data } = await this.api.get("/user");
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  getProfile = async () => {
    try {
      const { data } = await this.api.get("/user/profile");
      return data;
    } catch (error) {
      throw error;
    }
  };

  updateAvatar = async (formData) => {
    try {
      const { data } = await this.api.put("/user/image", formData);
      return data;
    } catch (error) {
      throw error;
    }
  };

  //
  //

  addUser = async (user) => {
    try {
      const { data } = await this.api.post("/user", user);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  editUser = async (userId, user) => {
    try {
      const { data } = await this.api.put(`/user/${userId}`, user);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  removeUser = async (userId) => {
    try {
      await this.api.delete(`/user/${userId}`);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  verify = async (token) => {
    const { data } = await this.api.get("/auth/verify", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  };

  getLikes = async () => {
    try {
      const { data } = await this.api.get("/likes");
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  getLike = async (likeId) => {
    try {
      const { data } = await this.api.get(`/likes/${likeId}`);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  addLike = async (like) => {
    try {
      const { data } = await this.api.post("/likes", like);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  editLike = async (likeId, like) => {
    try {
      const { data } = await this.api.put(`/likes/${likeId}`, like);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  removeLike = async (likeId) => {
    try {
      await this.api.delete(`/likes/${likeId}`);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}
const backend_url = process.env.REACT_APP_API_URL || "http://localhost:5000";
const api = new Api(backend_url);
export default api;
