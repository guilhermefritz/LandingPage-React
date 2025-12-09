import React, { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [activeButton, setActiveButton] = useState("INÍCIO");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "INÍCIO", id: "inicio" },
    { label: "SOBRE", id: "sobre" },
    { label: "SERVIÇOS", id: "servicos" },
    { label: "EQUIPE", id: "equipe" },
    { label: "ESPAÇO", id: "espaco" },
    { label: "FAQ", id: "faq" },
    { label: "CONVÊNIOS", id: "convenios" },
  ];

  const handleClick = (item, e) => {
    e.preventDefault();
    setActiveButton(item.label);

    const section = document.getElementById(item.id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setMobileMenuOpen(false); // Fecha o menu ao clicar
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <a
            href="#inicio"
            className={styles.logoLink}
            onClick={(e) => handleClick({ label: "INÍCIO", id: "inicio" }, e)}
          >
            <img
              src="/img-header/logo.png"
              alt="Logo Instituto Attuare"
              className={styles.logo}
            />
          </a>
        </div>

        {/* Navegação */}
        <nav
          className={`${styles.navigation} ${
            mobileMenuOpen ? styles.open : ""
          }`}
        >
          <ul className={styles.navList}>
            {menuItems.map((item) => (
              <li key={item.label} className={styles.navItem}>
                <a
                  href={`#${item.id}`}
                  className={`${styles.navLink} ${
                    activeButton === item.label ? styles.active : ""
                  }`}
                  onClick={(e) => handleClick(item, e)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

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
        </nav>

        {/* Botão Hamburger */}
        <div className={styles.mobileMenu}>
          <button
            className={styles.menuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
