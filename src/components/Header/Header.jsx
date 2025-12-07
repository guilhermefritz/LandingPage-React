import styles from "./Header.module.css";
{/* importando o modulo correto*/}
import React from 'react';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>

        <img className={styles.logo} src="/img-header/logo.png" alt="Logo" />

        <nav className={styles.nav}>
          <a href="#">INÍCIO</a>
          <a href="#">SOBRE</a>
          <a href="#">SERVIÇOS</a>
          <a href="#">EQUIPE</a>
          <a href="#">ESPAÇO</a>
          <a href="#">FAQ</a>
          <a href="#">CONVÊNIOS</a>
        </nav>

        <div className={styles.whatsapp}>
          <img src="/icons/whats.svg" alt="WhatsApp" />
          <span>
            Entre em Contato<br />
            (61) 9 9978-9601
          </span>
        </div>
      </div>
    </header>
  );
}

