import styles from "./Header.module.css";
import React from 'react';

export default function Header() {
  const [activeButton, setActiveButton] = React.useState('INÍCIO');

  // Mapeamento dos itens para seus respectivos IDs na página
  const menuItems = [
    { label: 'INÍCIO', id: 'inicio' },
    { label: 'SOBRE', id: 'sobre' },
    { label: 'SERVIÇOS', id: 'servicos' },
    { label: 'EQUIPE', id: 'equipe' },
    { label: 'ESPAÇO', id: 'espaco' },
    { label: 'FAQ', id: 'faq' },
    { label: 'CONVÊNIOS', id: 'convenios' }
  ];

  const handleClick = (item, e) => {
    e.preventDefault();
    setActiveButton(item.label);
    
    // Navega para a seção correspondente
    const elemento = document.getElementById(item.id);
    if (elemento) {
      elemento.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo com link para o topo */}
        <div className={styles.logoContainer}>
          <a 
            href="#inicio" 
            onClick={(e) => handleClick({ label: 'INÍCIO', id: 'inicio' }, e)}
            className={styles.logoLink}
          >
            <img 
              className={styles.logo} 
              src="/img-header/logo.png" 
              alt="Logo Instituto Attuare" 
            />
          </a>
        </div>

        {/* Navegação */}
        <div className={styles.navigation}>
          <nav className={styles.navMenu}>
            <ul className={styles.navList}>
              {menuItems.map((item) => (
                <li key={item.label} className={styles.navItem}>
                  <a
                    href={`#${item.id}`}
                    className={`${styles.navLink} ${activeButton === item.label ? styles.active : ''}`}
                    onClick={(e) => handleClick(item, e)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato WhatsApp */}
          <div className={styles.contact}>
            <a 
              href="https://wa.me/556199756801" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.whatsappLink}
            >
              <div className={styles.whatsappIcon}>
                <img src="/img-header/wpp.png" alt="WhatsApp" />
              </div>
              <div className={styles.contactDetails}>
                <p className={styles.contactTitle}>Entre em Contato</p>
                <p className={styles.contactPhone}>(61) 9 9975-6801</p>
              </div>
            </a>
          </div>
        </div>

        {/* Botão Menu Mobile */}
        <div className={styles.mobileMenu}>
          <button className={styles.menuButton}>
            <span className={styles.menuIcon}>☰</span>
          </button>
        </div>
      </div>
    </header>
  );
}