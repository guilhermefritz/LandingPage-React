import React from "react";
{/* importando modulo */}
import styles from "./Intro.module.css";


 function Intro() {
  return (
    <>
      <section className={styles.intro}>
        <div className={styles.container}>

          {/* classe do texto */}
          <div className={styles.text}>
            <h1>
              Tudo bem não estar<br />bem. Mas vamos<br />juntos mudar isso?
            </h1>

            <p>
              Você sente que algo está desequilibrado? Seja a relação com seu
              filho, seu parceiro, sua saúde ou você mesmo, sabemos como é difícil
              dar o primeiro passo. O Instituto Attuare nasceu para cuidar do bem
              mais precioso que você tem: sua saúde emocional.
            </p>
            {/* classe do button */}
            <button className={styles.button}>FALE CONOSCO</button>
          </div>

          {/* imagem */}
          <div className={styles.imageWrapper}>
            <img
              src="img-intro/sofa.png"
              alt="Consultório"
              className={styles.image}
            />
            <div className={styles.blueSquare}></div>
          </div>

        </div>
      </section>

      {/* fundo preto */}
      <div className={styles.blackBackground}></div>

      {/* card sobreposto */}
      <div className={styles.card}>
        <div className={styles.item}>
          <img src="img-intro/icone-coracao.png" alt="" />
          <div>
            <h3>+8 mil</h3>
            <p>Vidas transformadas</p>
          </div>
        </div>

        <div className={styles.item}>
          <img src="img-intro/icone-coracao.png" alt="" />
          <div>
            <h3>+10 anos</h3>
            <p>Anos de experiência</p>
          </div>
        </div>

        <div className={styles.item}>
          <img src="img-intro/icone-coracao.png" alt="" />
          <div>
            <h3>+20 mil</h3>
            <p>Sessões realizadas</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Intro;