import React from "react";
import styles from "./Espaco.module.css";

const Espaco = () => {
  const images = [
    { src: "/img-espaco/fotoespaco-1.png", alt: "Espaço 1 do Instituto Attuare" },
    { src: "/img-espaco/fotoespaco-3.png", alt: "Espaço 2 do Instituto Attuare" },
    { src: "/img-espaco/foto-espaco4.png", alt: "Espaço 3 do Instituto Attuare" },
    { src: "/img-espaco/fotoespaco-5.png", alt: "Espaço 4 do Instituto Attuare" },
    { src: "/img-espaco/foto6.png", alt: "Espaço 5 do Instituto Attuare" },
  ];

  return (
    <section id="espaco" className={styles.section}>
      <div className={styles.container}>
        {/* TEXTO */}
        <div className={styles.textBox}>
          <span className={styles.sectionMarker}>▆ Cada Pessoa Tem Sua História</span>

          <h2 className={styles.section.Title}>
            Sua história é o ponto de partida, não um rótulo.
          </h2>

          <p>
            No Instituto Attuare, a gente começa pela escuta de verdade. Não encaixamos você em um modelo pronto, entendemos o que aconteceu, o que pesa e o que você quer reconstruir.
          </p>
          <p>
            Seja uma mãe cansada tentando se encontrar de novo, um profissional sobrecarregado, um pai buscando clareza no desenvolvimento do filho ou alguém que já tentou terapia e não se sentiu visto.
          </p>

          <button className={styles.whatsappButton}>
            <i className="fa-brands fa-whatsapp"></i> ENTRE EM CONTATO
          </button>
        </div>

        {/* GALERIA COM EFEITOS HOVER */}
        <div className={styles.galleryContainer}>
         // Galeria com grid responsivo
{/* Layout de galeria: 3 imagens na primeira linha, 2 na segunda */}
          <div className={`${styles.galleryRow} ${styles.galleryRow3}`}>
            {images.slice(0, 3).map((img, index) => (
              <div key={index} className={styles.galleryItem}>
                <img 
                  src={img.src} 
                  alt={img.alt}
                  className={styles.galleryImage}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className={styles.galleryOverlay}>
                
                </div>
                <div className={styles.fallbackIcon}>
                  <i className="fas fa-image"></i>
                </div>
              </div>
            ))}
          </div>

          {/* Segunda linha: 2 imagens */}
          <div className={`${styles.galleryRow} ${styles.galleryRow2}`}>
            {images.slice(3, 5).map((img, index) => (
              <div key={index + 3} className={styles.galleryItem}>
                <img 
                  src={img.src} 
                  alt={img.alt}
                  className={styles.galleryImage}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className={styles.galleryOverlay}>
                  <i className={`fas fa-search-plus ${styles.searchIcon}`}></i>
                </div>
                <div className={styles.fallbackIcon}>
                  <i className="fas fa-image"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Espaco;