import React from "react";
import styles from "./Espaco.module.css";

const Espaco = () => {
  return (
    <section id="espaco" className={styles.section}>
      <div className={styles.container}>
        
        {/* TEXTO */}
        <div className={styles.textBox}>
          <span className={styles.label}>▆ Cada Pessoa Tem Sua História</span>

          <h2 className={styles.title}>
            Sua história é o ponto de partida, não um rótulo.
          </h2>

          <p>
            No Instituto Attuare, a gente começa pela escuta de verdade. Não encaixamos você em um modelo pronto, entendemos o que aconteceu, o que pesa e o que você quer reconstruir.
          </p>
          <p>
            Seja uma mãe cansada tentando se encontrar de novo, um profissional sobrecarregado, um pai buscando clareza no desenvolvimento do filho ou alguém que já tentou terapia e não se sentiu visto.
          </p>

          <button className={styles.button}>
            <i className="fa-brands fa-whatsapp"></i> ENTRE EM CONTATO
          </button>
        </div>

        {/* GALERIA */}
        <div className={styles.gallery}>
          
          {/* Primeira linha com 3 fotos */}
          <div className={styles.galleryFirstRow}>
            <div className={styles.photoBox}>
              <img 
                src="/img-espaco/fotoespaco-1.png" 
                alt="Sala de consultório com sofá confortável"
                className={styles.photo}
              />
            </div>
            
            <div className={styles.photoBox}>
              <img 
                src="/img-espaco/fotoespaco-3.png" 
                alt="Espaço de espera acolhedor"
                className={styles.photo}
              />
            </div>
            
            <div className={styles.photoBox}>
              <img 
                src="/img-espaco/foto-espaco4.png" 
                alt="Detalhe da decoração do consultório"
                className={styles.photo}
              />
            </div>
          </div>

          {/* Segunda linha com 2 fotos */}
          <div className={styles.gallerySecondRow}>
            <div className={styles.photoBox}>
              <img 
                src="/img-espaco/fotoespaco-5.png" 
                alt="Vista interna do Instituto Attuare"
                className={styles.photo}
              />
            </div>
            
            <div className={styles.photoBox}>
              <img 
                src="/img-espaco/foto6.png" 
                alt="Ambiente de atendimento personalizado"
                className={styles.photo}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Espaco;