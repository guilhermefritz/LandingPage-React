import React from 'react';
{/* importando o modulo correto*/}
import styles from './Footer.module.css';





const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        
        <div className={styles.column}>
          <img src="/img-footer/logoo.png" className={styles.logo} />
          <p>
           Vamos oferecer uma explicação
completa do sistema e expor os
ensinamentos do grande explorador
da verdade, o mestre-construtor
porque...
          </p>
        </div>

        {/* menu institucional */}
        <div className={styles.column}>
          <h3>Institucional</h3>
         <ul>
  <li><a href="#inicio">Home</a></li>
  <li><a href="#sobre">Sobre</a></li>
  <li><a href="#servicos">Serviços</a></li>
  <li><a href="#equipe">Equipe</a></li>
  <li><a href="#espaco">Espaço</a></li>
  <li><a href="#faq">FAQ</a></li>
  <li><a href="#">Convênios</a></li>
</ul>

        </div>

        
        <div className={styles.column}>
          <h3>Encontre–Nos</h3>
         <div className={styles.social}>
  <a
    href="https://www.facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.socialLink}
  >
    
    <img src="/img-footer/icone-facebook.png" alt="Facebook" />
  </a>

  <a
    href="https://www.instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.socialLink}
  >
    
    <img src="/img-footer/icone-instagram.png" alt="Instagram" />
  </a>

  <a
    href="https://www.google.com"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.socialLink}
  >
    
    <img src="/img-footer/icone-google.png" alt="LinkedIn" />
  </a>
</div>

        </div>
      </div>

      {/* copyright */}
      <div className={styles.copy}>
        © 2025 GrowBusiness. Todos os direitos reservados
      </div>
    </footer>
  );
};

export default Footer;
