import React from 'react'
{/* importando o modulo correto*/}
import styles from './Passos.module.css'; 




const Passos = () => {
  return (
    <section className={styles.fullWidthBackground}> 
    {/*  classe da imagem que ocupa a tela */}
      <img 
        src="/img-passos/passos.png"
        alt="Imagem decorativa"
        
        className={styles.backgroundImage}  
        
      />

      {/* classe do button para estilizar*/}

      <button className={styles.backgroundButton}>
        <i className="fa-brands fa-whatsapp"></i> ENTRE EM CONTATO
      </button>
    </section>
  );
};

export default Passos;
