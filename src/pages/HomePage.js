import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import api from "../api/api";
import styles from "../components/styles/home.module.scss";
import logoImg from "../components/img/logo-m.png";
import HomedImage from "../components/styles/HomeImage";

function LoginPage() {
  return (
    <>
      <div className="nossaGaleria">
        <h2>Nossa Galeria</h2>
      </div>
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
    </>
  );
}

export default LoginPage;
