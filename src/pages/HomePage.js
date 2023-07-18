import styles from "../components/styles/home.module.scss";
// import ourGallery from "../components/img/README.img/admin-mygroup.png";

function LoginPage() {
  return (
    <>
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

      <div className={styles.LikeListPage2}>
        <div className="homeCard">
          <div className="homeCardImg">
            <h3 className="homeCardTitle">Conheça seu Grupo!</h3>
            <img src="./README/admin-mygroup.png" alt="our gallery" />
          </div>
        </div>
        <div className="homeCard">
          <div className="homeCardImg">
            <h3 className="homeCardTitle">Descubra indicações valiosas!</h3>
            <img src="./README/user-see-likes-user.png" alt="our gallery" />
          </div>
        </div>

        <div className="homeCard">
          <div className="homeCardImg">
            <h3 className="homeCardTitle">Descubra indicações valiosas!</h3>
            <img src="./README/user-edit-likes.png" alt="our gallery" />
          </div>
        </div>
        <div className="homeCard">
          <div className="homeCardImg">
            <h3 className="homeCardTitle">Deixe um pouco de sua história!</h3>
            <img src="./README/see-likes.png" alt="our gallery" />
          </div>
        </div>
        <div className="homeCard">
          <div className="homeCardImg">
            <h3 className="homeCardTitle">Cresça junto com seu Grupo!</h3>
            <img src="./README/add-likes.png" alt="our gallery" />
          </div>
        </div>
        <div className="homeCard">
          <div className="homeCardImg">
            <h3 className="homeCardTitle">Deixe seu cadastro atualizado</h3>

            <img src="./README/user-admin-edit-user.png" alt="our gallery" />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
